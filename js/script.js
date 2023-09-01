const produtos = [
  {
    imagem: "assets/camisa_furia.png",
    nome: "Camisa Furia",
    precoComDesconto: 9999.99,
    precoTotal: 99999.99,
    tamanhos: ["PP", "P", "M", "G", "GG", "XGG"],
  },
  {
    imagem: "assets/blusa_furia.png",
    nome: "Blusa Furia",
    precoComDesconto: 9999.99,
    precoTotal: 99999.99,
    tamanhos: ["PP", "P", "M", "G", "GG", "XGG"],
  },
  {
    imagem: "assets/camisa_furia_azul.png",
    nome: "Camisa Furia Azul",
    precoComDesconto: 9999.99,
    tamanhos: ["PP", "P", "M", "G", "GG", "XGG"],
  },
  {
    imagem: "assets/blusa_furia.png",
    nome: "Blusa Furia",
    precoComDesconto: 9999.99,
    precoTotal: 99999.99,
    tamanhos: ["PP", "P", "M", "G", "GG", "XGG"],
  },
];

function showcaseAssemble(produto) {
    const showcaseContainer = document.querySelector(".home__showcase");

    const _productWrapper = document.createElement("div");
    const _productImage = document.createElement("img");
    const _productName = document.createElement("p");
    const _discountPrice = document.createElement("p");
    const _totalPrice = document.createElement("p");
    const _overlay = document.createElement("div");
    const _buyButton = document.createElement("button");
    const _sizeButtons = document.createElement("div");

    _productWrapper.classList.add("product-card");
    _productImage.classList.add("product-image");
    _productName.classList.add("product-name");
    _discountPrice.classList.add("price");
    _totalPrice.classList.add("total-price");
    _overlay.classList.add("overlay");
    _buyButton.classList.add("buy-button"); 
    _sizeButtons.classList.add("size-buttons");

    _productImage.src = produto.imagem;
    _productName.textContent = produto.nome;

    if (produto.precoComDesconto !== undefined) {
        const discountPrice = parseFloat(produto.precoComDesconto);
        _discountPrice.textContent = `R$ ${discountPrice.toFixed(2)}`;

        if (produto.precoTotal !== undefined) {
            const totalPrice = parseFloat(produto.precoTotal);
            _totalPrice.textContent = `R$ ${totalPrice.toFixed(2)}`;
        } else {
            _totalPrice.style.display = "none";
        }
    }

    _buyButton.textContent = "Comprar";

    produto.tamanhos.forEach((tamanho) => {
        const sizeButton = document.createElement("button");
        sizeButton.classList.add("size-button");
        sizeButton.textContent = tamanho;
        _sizeButtons.appendChild(sizeButton);
    });

    _productWrapper.appendChild(_productImage);
    _productWrapper.appendChild(_productName);
    _productWrapper.appendChild(_discountPrice);
    _productWrapper.appendChild(_totalPrice);

    _overlay.appendChild(_sizeButtons);
    _overlay.appendChild(_buyButton);

    _productWrapper.appendChild(_overlay);

    showcaseContainer.appendChild(_productWrapper);
}

produtos.forEach((produto) => {
  showcaseAssemble(produto);
});
