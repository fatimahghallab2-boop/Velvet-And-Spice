// Menu items data array with details
const menuItems = [
    {
        name: "ترافل كلاسيك برجر",
        price: "42 SR",
        description: "لحم برجر طازج، صوص الترافل الفاخر، جبنة الشيدر المعتقة، وخبز البريوش المحمص.",
        category: "main"

    },
    {
        name: "سبايسي هانتر برجر",
        price: "39 SR",
        description: "شريحة لحم مشوية على النار، صوص الحار الخاص بالمطعم، هلابينو، وجبنة فلفل حار.",
        category: "main"  
    },
     {
        name: "فيلفت آند سبيس سيجنتشر",
        price: "38 SR",
        description: "قطعتين لحم طازج، فطر مشوح بصوص البهارات، شريحتين جبنة شيدر مذوبة، وصوص فيلفت الخاص.",
        category: "main"  
    },
    {
        name: "بطاطس بالجبنة",
        price: "18 SR",
        description: "بطاطس مقرمشة مغطاة بصوص جبنة الشيدر.",
        category: "starters"  
    },
        {
        name: "ديناميت شريمب",
        price: "24 SR",
        description: "روبيان مقرمش مغطى بصوص الديناميت الحار واللذيذ.",
        category: "starters"  
    },
      {
        name: "فولكانو شوكلت كيك",
        price: "22 SR",
        description: "كيكة شوكولاتة دافئة مع الشوكولاتة السائلة من الداخل، تقدم مع آيس كريم الفانيليا",
        category: "desserts"  
    },
    {
        name: "تشورو بالشوكلت",
        price: "18 SR",
        description: "أصابع التشوروس المقرمشة المغموسة بالقرفة والسكر، وتُقدم مع صوص الشوكولاتة",
        category: "desserts"  
    }
    ,
     {
        name: "موهيتو فيلفت الخاص",
        price: "15 SR",
        description:"نكهة التوت الأزرق المنعشة مع النعناع والليمون والصودا",
        category: "drinks"  
    },
    {
        name:"آيس تي خوخ",
        price: "12 SR",
        description:"شاي مثلج بنكهة الخوخ المنعش",
        category: "drinks"  
    },
    {
        name: "مشروبات غازية",
        price: "3 SR",
        description:"جميع أنواع الكينزا",
        category: "drinks"  
    }

];
// Get cards container element
const cards = document.getElementById("cards");
// Render menu items into HTML cards
function displayMenu(itemToDisplay){
    cards.innerHTML = "";

    itemToDisplay.forEach(item =>{
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `<h3>${item.name}</h3>
    <p>${item.description}</p>
    <span>${item.price}</span>`;

    cards.appendChild(card);
});
}
// Filter menu items by category
function filterd(selectedType){
    if (selectedType === "all"){
        displayMenu(menuItems);
}
    else{
    const result = menuItems.filter(item =>item.category === selectedType);
    displayMenu(result);
    }

}
// Handle click event on category links
const link = document.querySelectorAll(".menu-link a");

link.forEach(item => {
    item.addEventListener("click", function() {
        link.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        const categoryName = item.getAttribute("data-category");
        filterd(categoryName);
    });
});
// Display all items on initial load
displayMenu(menuItems);

    
