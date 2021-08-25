export default function Container () {

    const categories = [
        {categoryTitle: "Primeiro, seu prato", categoryType: "main-course"},
        {categoryTitle: "Agora, sua bebida", categoryType: "drinks"},
        {categoryTitle: "Por fim, sua sobremesa", categoryType: "deserts"},
    ];

    const dishes = [
        {type: categories[0].categoryType, srcId: "frangoBatata", name: "Frango com batata", description: "200g de frango acompanhado de batata", price: "22,70"},
        {type: categories[0].categoryType, srcId: "peixe", name: "Truta com arroz", description: "Truta acompanhada de arroz integral e salada", price: "37,10"},
        {type: categories[0].categoryType, srcId: "picanha", name: "Picanha e fritas", description: "300g de picanha com uma porção de fritas", price: "35,90"},
        {type: categories[0].categoryType, srcId: "estrogonofe-de-carne", name: "Strogonoff de carne", description: "Strogonoff com arroz e batata palha", price: "26,95"},
        {type: categories[1].categoryType, srcId: "suco", name: "Suco de laranja", description: "Suco natural feito com 7 laranjas maduras", price: "7,55"},
        {type: categories[1].categoryType, srcId: "mate", name: "Mate da casa", description: "Mate feito na casa com limão opcional", price: "4,30"},
        {type: categories[1].categoryType, srcId: "vitamina", name: "Vitamina de banana", description: "Batida com leite, banana e aveia opcional", price: "6,90"},
        {type: categories[1].categoryType, srcId: "coca zero", name: "Coca cola zero", description: "Latinha de coca zero 350ml", price: "3,95"},
        {type: categories[2].categoryType, srcId: "brownie", name: "Brownie sem açucar", description: "Brownie de chocolate feito sem açucar", price: "14,15"},
        {type: categories[2].categoryType, srcId: "panqueca", name: "Panquecas de whey", description: "Panquecas feitas com whey, mel e morangos", price: "15,00"},
        {type: categories[2].categoryType, srcId: "torta", name: "Torta de limão", description: "Fatia de deliciosa torta de limão", price: "12,80"},
        {type: categories[2].categoryType, srcId: "pudim", name: "Pudim fit", description: "Pudim fit feito sem açucar", price: "10,00"},
    ]

    return (
        <div class="container">

            {categories.map(category => 
                <div class="content">

                    <div class="top-content-text">
                        <p class="font-weight-400 font-righteous">{category.categoryTitle}</p>
                    </div>

                    <div class="content-options">

                        {dishes.map(dish => 
                            dish.type === category.categoryType ? (
                                <div class={`option-box ${dish.type}`} onclick="mainCourse(this)">
                                    <img src={`imagens/${dish.srcId}.jpg`} />
                                    <div class="menu">
                                        <p class="name">{dish.name}</p>
                                        <p class="description">{dish.description}</p>
                                        <p class="price">{dish.price}<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
                                    </div>
                                </div>
                            )
                            : (<></>)
                        )}

                    </div>
                </div>
            )}

        </div>
    );
}


{/* <div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Primeiro, seu prato</p>
</div>

<div class="content-options">

    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/frangoBatata.jpg" />
        <div class="menu">
            <p class="name">Frango com batata</p>
            <p class="description">200g de frango acompanhado de batata</p>
            <p class="price">R$ 22,70<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/peixe.jpg" />
        <div class="menu">
            <p class="name">Truta com arroz</p>
            <p class="description">Truta acompanhada de arroz integral e salada</p>
            <p class="price">R$ 37,10<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)">
        <img src="imagens/picanha.jpg" />
        <div class="menu">
            <p class="name">Picanha e fritas</p>
            <p class="description">300g de picanha com uma porção de fritas</p>
            <p class="price">R$ 35,90<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box main-course" onclick="mainCourse(this)"> 
        <img src="imagens/estrogonofe-de-carne.jpg" />
        <div class="menu">
            <p class="name">Strogonoff de carne</p>
            <p class="description">Strogonoff com arroz e batata palha</p>
            <p class="price">R$ 26,95<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div>

<div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Agora, sua bebida</p>
</div>

<div class="content-options">

    <div class="option-box drinks" onclick="drink(this)">                 
        <img src="imagens/suco.jpg" />
        <div class="menu">
            <p class="name">Suco de laranja</p>
            <p class="description">Suco natural feito com 7 laranjas maduras</p>
            <p class="price">R$ 7,55<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/mate.jpg" />
        <div class="menu">                       
            <p class="name">Mate da casa</p>
            <p class="description">Mate feito na casa com limão opcional</p>
            <p class="price">R$ 4,30<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/vitamina.jpg" />
        <div class="menu">                       
            <p class="name">Vitamina de banana</p>
            <p class="description">Batida com leite, banana e aveia opcional</p>
            <p class="price">R$ 6,90<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box drinks" onclick="drink(this)">
        <img src="imagens/coca zero.jpg" />
        <div class="menu">                        
            <p class="name">Coca cola zero</p>
            <p class="description">Latinha de coca zero 350ml</p>
            <p class="price">R$ 3,95<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div>

<div class="content">

<div class="top-content-text">
    <p class="font-weight-400 font-righteous">Por fim, sua sobremesa</p>
</div>

<div class="content-options">
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/brownie.jpg" />
        <div class="menu">                       
            <p class="name">Brownie sem açucar</p>
            <p class="description">Brownie de chocolate feito sem açucar</p>
            <p class="price">R$ 14,15<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/panqueca.jpg" />
        <div class="menu">                      
            <p class="name">Panquecas de whey</p>
            <p class="description">Panquecas feitas com whey, mel e morangos</p>
            <p class="price">R$ 15,00<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/torta.jpg" />
        <div class="menu">                        
            <p class="name">Torta de limão</p>
            <p class="description">Fatia de deliciosa torta de limão</p>
            <p class="price">R$ 12,80<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>
    <div class="option-box deserts" onclick="desert(this)">
        <img src="imagens/pudim.jpg" />
        <div class="menu">                       
            <p class="name">Pudim fit</p>
            <p class="description">Pudim fit feito sem açucar</p>
            <p class="price">R$ 10,00<span><ion-icon name="checkmark-circle" class="check"></ion-icon></span></p>
        </div>
    </div>

</div>
</div> */}