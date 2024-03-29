// Задача 1: Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, 
// задайте источник и альтернативный текст для каждой картинки.

    const images = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    ];

    const img = document.querySelectorAll("img");

    for(let i = 0; i < images.length; i++) {
        img[i].setAttribute("src", images[i].src);
        img[i].setAttribute("alt", images[i].alt);
    }

    console.log(img);


//  Задача 2: Создайте список с 3 пустыми пунктами в HTML.Используя следующий массив измените текст пунктов.
     
    const listItems = ['Item 1', 'Item 2', 'Item 3'];

    const items = document.querySelectorAll("li");
    
    for(let i = 0; i < listItems.length; i++) {
        items[i].innerText = listItems[i];
    }
    
    console.log(items);


