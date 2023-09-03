import { createContext, useContext, useState, useEffect } from 'react'; // Gerekli hooklarımı ve metotlarımı import ediyorum.
import { request, addCartItem, toggleActiveClass } from '../utils/utils';

// Contextimi oluşturdum
const DataContext = createContext();

// Hooklarımı ve metotlarımı topluca geçmemek için bir fonksiyon oluşturdum. 
export const useData = () => {
  return useContext(DataContext);
}
// Provider
export const DataProvider = ({ children }) => {
  const [grouppedData, setGrouppedData] = useState([]); // API'de pagination özelliği olmadığı için API'yi 50'şerli olarak objelere ayırdım ve grupladım. 
  const [currentData, setCurrentData] = useState([]); // Sayfa ilk yüklendiğinde tüm datayı getirmek yerine 100'er 100'er şekilde getirmek için bir state tuttum.
  const [currentPage, setCurrentPage] = useState(0); // Infinite scroll yapmak için Page number olarak, datadan istediğim kısmı bir statete tuttum. 
  const [cartItems, setCartItems] = useState([]); // Sepete eklediğim oranlarımı tuttuğum state. 
  const [oldCartItems, setOldCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  (() => { // Body için bir event yazmak için IIFE'den yararlandım. Infinite scroll için gerekli scroll eventim. 
    const body = document.querySelector("body");
    body.onscroll = function () {
      if (window.scrollY > (document.body.offsetHeight - window.outerHeight)) { // Window scroll mesafesi içeriğimin altına geldiğinde 
        if (currentData === grouppedData.length) {
          return;
        }
        setCurrentPage(currentPage + 1); // Page number olarak getirmem gereken array indeximi arttırıyorum. 
        setCurrentData([...currentData, ...grouppedData[currentPage]]) // Current Page datamı 50'lik 1 object kadar daha arttırarak ilerliyorum. 100 - 150 - 200 şeklinde devam edecek. 
      }
    }
  })();

  useEffect(() => { // Sayfa yüklendiğinde PseudoFunction olarak yazdığım request ile datamın tamamını çekiyorum.
    request('https://nesine-case-study.onrender.com/bets')
      .then((grouppedData) => {
        setGrouppedData(grouppedData); // Tüm datayı yazdığım state gönderiyorum. 
        setCurrentData(grouppedData[currentPage]); // Bütün datamın tutulduğu stateten current statetimi ayarlıyorum. Başlangıç değeri olarak indexi 0 tercih ettim.
      })
  }, []);

  useEffect(() => { // React rendering özelliğinden yararalanmak için bir useEffect daha oluşturdum.
    const newCartTotal = cartItems.reduce((total, cartItem) => total * cartItem.rate, 1); // Sepet elemanlarımın oranlarını çarpıyorum. 
    setCartTotal(newCartTotal.toFixed(2)); // Sepet toplam statetimi güncelliyorum. 
    toggleActiveClass(cartItems, 'active', oldCartItems);
  }, [cartItems, oldCartItems]); // State değiştiğinde değerimin render olması için statetimi useEffect argümanı geçiyorum.

  const addItemToCart = (target, data) => { // Sepete oran ekleme metotum. 
    if (!target.dataset.rate) { // Boş olan ve text olan oran kutularıma tıklandığında fonksiyonu geri çeviriyorum. 
      return;
    }

    const item = { // Oran bulunan kutuya tıklandığında ihtiyacım olacak olan datayı bir objeye atıyorum. 
      rate: Number(target.dataset.rate.trim()), // Oranı alıyorum. 
      id: Number(target.closest('.bulletin-table-row').dataset.id.trim()), // Id'yi alıyorum. 
      element: target, // Ui değişikliklri için tıkladığım kutuyu alıyorum. 
      row: target.closest('.bulletin-table-row'),
      data
    }
    setCartItems(addCartItem(cartItems, item));  // PseudoFunction ile döndürdüğüm değeri Sepet statime gönderiyorum.
    setOldCartItems(cartItems);
  }

  return ( // Componentlerde ulaşmak istediğim stateleri ve metotları valu olarak gönderiyorum. 
    <DataContext.Provider value={{ currentData, cartItems, addItemToCart, cartTotal }}>
      {children}
    </DataContext.Provider>
  );
}
