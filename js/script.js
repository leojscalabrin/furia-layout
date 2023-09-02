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

const produtosMobile = [
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
];

function showcaseAssemble(produto, container) {
  const showcaseContainer = document.querySelector(container);

  const _productWrapper = document.createElement("div");
  const _productImage = document.createElement("img");
  const _productName = document.createElement("p");
  const _discountPrice = document.createElement("p");
  const _totalPrice = document.createElement("p");
  const _overlay = document.createElement("div");
  const _buyButton = document.createElement("button");
  const _sizeButtons = document.createElement("div");
  const _priceWrapper = document.createElement("div");
  const _installmentText = document.createElement("p");

  _productWrapper.classList.add("product-card");
  _productImage.classList.add("product-image");
  _productName.classList.add("product-name");
  _discountPrice.classList.add("price");
  _totalPrice.classList.add("total-price");
  _overlay.classList.add("overlay");
  _buyButton.classList.add("buy-button");
  _sizeButtons.classList.add("size-buttons");
  _priceWrapper.classList.add("price-wrapper");
  _installmentText.classList.add("installment-text");

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

  _installmentText.textContent = "Em até 3x sem juros no cartão";

  _buyButton.textContent = "Comprar";

  produto.tamanhos.forEach((tamanho) => {
    const sizeButton = document.createElement("button");
    sizeButton.classList.add("size-button");
    sizeButton.textContent = tamanho;
    _sizeButtons.appendChild(sizeButton);
  });

  _productWrapper.appendChild(_productImage);
  _productWrapper.appendChild(_productName);
  _productWrapper.appendChild(_priceWrapper);
  _priceWrapper.appendChild(_discountPrice);
  _priceWrapper.appendChild(_totalPrice);
  _productWrapper.appendChild(_installmentText);

  _overlay.appendChild(_sizeButtons);
  _overlay.appendChild(_buyButton);

  _productWrapper.appendChild(_overlay);

  showcaseContainer.appendChild(_productWrapper);
}

function mobileMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    const $openMenuButton = document.querySelector(".open-menu");
    const $closeMenuButton = document.querySelector(".mobile-menu-close");
    const $mobileMenu = document.querySelector(".mobile-menu");

    $openMenuButton.addEventListener("click", function () {
      $mobileMenu.classList.remove("hidden");
      $mobileMenu.classList.add("menu-open");
    });

    $closeMenuButton.addEventListener("click", function () {
      $mobileMenu.classList.remove("menu-open");
      setTimeout(function () {
        $mobileMenu.classList.add("hidden");
      }, 300);
    });
  });
}

let $screenWidth = screen.width;

if ($screenWidth > 1024) {
  produtos.forEach((produto) => {
    showcaseAssemble(produto, ".home__showcase");
  });

  produtos.forEach((produto) => {
    showcaseAssemble(produto, ".news");
  });
} else {
  mobileMenu();

  produtosMobile.forEach((produto) => {
    showcaseAssemble(produto, ".home__showcase");
  });

  produtosMobile.forEach((produto) => {
    showcaseAssemble(produto, ".news");
  });
}
