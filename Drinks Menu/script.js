//items
const menu = [
    {
        id:1,
        title:'Dark Beer',
        category:'beer',
        price: 2.80,
        img:'./images/dark-beer.jpg',
        description:'Dark beers are a fascinating and varied subcategory that spans a wide breadth of styles from sours to porters to stouts to black IPAs.'
    },
    {
        id:2,
        title:'White Wine',
        category:'wine',
        price:5.20,
        img:'./images/white-wine.jpg',
        description:'White wine is a wine that is fermented without skin contact. The colour can be straw-yellow, yellow-green, or yellow-gold. It is produced by the alcoholic fermentation of the non-coloured pulp of grapes, which may have a skin of any colour. '
    },
    {
        id:3,
        title:'Whiskey',
        category:'short-drink',
        price:6.10,
        img:'./images/whiskey.jpg',
        description:'Whisky or whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn, rye, and wheat.'
    },
    {
        id:4,
        title:'White Beer',
        category:'beer',
        price:2.05,
        img:'./images/white-beer.jpg',
        description:'White beer is defined as an unfiltered, top-fermented wheat beer. ... A white beer light haze comes from both yeast and protein that remain in suspension after fermentation. In its flavor, you will find a refreshing balance of citrus and spice, along with a range of subtle aromas like vanilla and clove.'
    },
    {
        id:5,
        title:'Vodka',
        category:'short-drink',
        price:3.5,
        img:'./images/vodka.jpg',
        description:'Vodka is a clear distilled alcoholic beverage. Vodka is composed mainly of water and ethanol, but sometimes with traces of impurities and flavourings. Traditionally it is made by distilling liquid from fermented cereal grains. Potatoes have been used in more recent times, and some modern brands use fruits, honey, or maple sap as the base.'
    },
    {
        id:6,
        title:'Sangria',
        category:'wine',
        price:5.50,
        img:'./images/sangria.jpg',
        description:'Sangria is an alcoholic beverage originating in Spain and Portugal. A punch, sangria traditionally consists of red wine and chopped fruit, often with other ingredients or spirits.'
    },
    {
        id:7,
        title:'Lager',
        category:'beer',
        price:1.80,
        img:'./images/lager.jpg',
        description:'Lager is beer which has been brewed and conditioned at low temperature. Lagers can be pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer. The term "lager" comes from the German for "storage", as the beer was stored before drinking - traditionally in the same cool caves it was fermented in.'
    },
    {
        id:8,
        title:'Tequila',
        category:'short-drink',
        price:3.80,
        img:'./images/tequila.jpg',
        description:'Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara, and in the Jaliscan Highlands (Los Altos de Jalisco) of the central western Mexican state of Jalisco.'
    },
    {
        id:9,
        title:'Red Wine',
        category:'wine',
        price:4.80,
        img:'./images/red-wine.jpg',
        description:'Red wine is a type of wine made from dark-colored grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white, the red color coming from anthocyan pigments  present in the skin of the grape.'
    },
    {
        id:10,
        title:'Rum',
        category:'short-drink',
        price:3.10,
        img:'./images/rum.jpg',
        description:'Rum is a liquor made by fermenting then distilling sugarcane molasses or sugarcane juice. The distillate, a clear liquid, is usually aged in oak barrels. Most rums are produced in Caribbean and North and South American countries.'
    },
    {
        id:11,
        title:'Shandy',
        category:'beer',
        price:3.30,
        img:'./images/radler.jpg',
        description:'Shandy is beer mixed with a lemon or a lemon-lime flavored beverage. The citrus beverage, often called lemonade, may or may not be carbonated. The proportions of the two ingredients are adjusted to taste but are usually half lemonade and half beer. Shandies are popular in Europe, Australia, New Zealand, South Africa, and Canada '
    },
    {
        id:12,
        title:'Rose',
        category:'wine',
        price:4.20,
        img:'./images/rose.jpg',
        description:'A rosé is a type of wine that incorporates some of the color from the grape skins, but not enough to qualify it as a red wine. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. The pink color can range from a pale "onionskin" orange to a vivid near-purple, depending on the grape varieties used and winemaking techniques. '
    }
]

const menuCenter = document.querySelector('.menu__center');

const filterButtons = document.querySelectorAll('.filter-button');


//load items
window.addEventListener('DOMContentLoaded',function() {
   displayMenuItems(menu);
});

//filter items
filterButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
            return menuItem;
        }
    });
    if(category === 'all') {
        displayMenuItems(menu);
    }
    else {
        displayMenuItems(menuCategory);
    }
    });
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu__item">
        <img src=${item.img} class="menu__item-photo" alt=${item.title}>
        <div class="menu__item-info">
            <header>
                <h3>${item.title}</h3>
                <h3 class="price">$${item.price}</h3>
            </header>
            <p class="menu__item-text">${item.description}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join('');
    menuCenter.innerHTML = displayMenu;
}