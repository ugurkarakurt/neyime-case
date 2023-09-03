import axios from 'axios'; // Axios tercih ettim requeestim için. 

// PseudoFunction Request
export const request = async (URL) => { // Parametre olarak dinamik bir URL tercih ettim. Kolay yönetmek için. 
  try {
    const response = await axios.get(URL); // İsteğimi atıp data dönene kadar bekliyorum. 
    const responseData = response.data;
    const grouppedData = []; // 50'şerli gruplamak için bir boş array oluşturuyorum. 

    for (let i = 0; i < responseData.length; i += 50) { // for döngüsünden yararlandım ve 50'şer olarak arttırarak ilerledim. 
      const grouppedArray = responseData.slice(i, i + 50); // 1-2-3 şeklinlde 50'şerli olarak responseu ayarlayıp değişkenime atıyorum. 
      grouppedData.push(grouppedArray); // Gruplama yaptıktan sonra boş arrayime pushluyorum. 
    }
    return grouppedData; // Yeni gruplanmış datamı dönüyorum.
  } catch (error) {
    console.error('API error:', error);
  }
}

// PseudoFunction Add to Cart
export const addCartItem = (cartItems, itemToAdd) => { // Parametre olarak statetimden sepet itemlerini ve yeni eklemek istediğim ve objeye çevirdiğim elemanı alıyorum.
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id); // Yeni eklemek istediğim eleman sepette zaten var mı diye id ile kontrol ediyorum. 
  if (existingCartItem) { // Eğer zaten eleman sepette varsa
    const existingCartItemRate = cartItems.find((cartItem) => cartItem.rate === itemToAdd.rate); // Eleman aynı fakat oran da aynı mı onu kontrol ediyorum. 

    if (existingCartItemRate) { // Eğer oran da aynı ise elemanı stateten silerek sepetten kaldırıyorum. 
      return cartItems.filter((cartItem) => cartItem.id !== itemToAdd.id);
    }

    if (!existingCartItemRate) { // Oran aynı değilse elemanın oranını güncelleyip devam ediyorum.
      return cartItems.map((cartItem) => {
        if (cartItem.id === itemToAdd.id) {
          return { ...cartItem, rate: itemToAdd.rate, element: itemToAdd.element }
        } else {
          return cartItem
        }
      }
      )
    }
  }

  if (!existingCartItem) { // Eleman sepette yoksa statetimi direkt güncelliyorum. 
    return [...cartItems, { ...itemToAdd }]
  }
}

// PseudoFunction Add to Cart
export const toggleActiveClass = (cartItems, className, oldCartItems) => {
  oldCartItems.forEach(item => {
    item.element.classList.remove(className);
    item.row.classList.remove(className);
  });
  cartItems.forEach(item => {
    item.element.classList.add(className);
    item.row.classList.add(className);
  });
}