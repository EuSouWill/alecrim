const catalog = document.getElementById("catalog");

const jewelryItems = [
    { nome: "Joia 1", preco: "R$100", imagem: "/img/joia1.jpeg", telefone: "5548998555501" },
    { nome: "Joia 2", preco: "R$150", imagem: "/img/joia2.jpg", telefone: "5548998555501" },
    { nome: "Joia 3", preco: "R$200", imagem: "/img/joia3.jpeg", telefone: "5548998555501" },
    { nome: "Joia 4", preco: "R$250", imagem: "/img/joia4.jpeg", telefone: "5548998555501" },
    { nome: "Joia 5", preco: "R$300", imagem: "/img/joia5.jpeg", telefone: "5548998555501" },
    { nome: "Joia 6", preco: "R$350", imagem: "/img/joia6.jpeg", telefone: "5548998555501" },
    { nome: "Joia 7", preco: "R$400", imagem: "/img/joia7.jpeg", telefone: "5548998555501" },
    { nome: "Joia 8", preco: "R$450", imagem: "/img/joia8.jpeg", telefone: "5548998555501" },
    { nome: "Joia 9", preco: "R$500", imagem: "/img/joia9.jpeg", telefone: "5548998555501" },
    { nome: "Joia 10", preco: "R$550", imagem: "/img/joia10.jpeg", telefone: "5548998555501" },
    { nome: "Joia 1", preco: "R$100", imagem: "/img/joia1.jpeg", telefone: "5548998555501" },
    { nome: "Joia 2", preco: "R$150", imagem: "/img/joia2.jpg", telefone: "5548998555501" },
    { nome: "Joia 3", preco: "R$200", imagem: "/img/joia3.jpeg", telefone: "5548998555501" },
    { nome: "Joia 4", preco: "R$250", imagem: "/img/joia4.jpeg", telefone: "5548998555501" },
    { nome: "Joia 5", preco: "R$300", imagem: "/img/joia5.jpeg", telefone: "5548998555501" },
    { nome: "Joia 6", preco: "R$350", imagem: "/img/joia6.jpeg", telefone: "5548998555501" },
    { nome: "Joia 7", preco: "R$400", imagem: "/img/joia7.jpeg", telefone: "5548998555501" },
    { nome: "Joia 8", preco: "R$450", imagem: "/img/joia8.jpeg", telefone: "5548998555501" },
    { nome: "Joia 9", preco: "R$500", imagem: "/img/joia9.jpeg", telefone: "5548998555501" },
    { nome: "Joia 9", preco: "R$500", imagem: "/img/joia9.jpeg", telefone: "5548998555501" }

    
    // Adicione mais itens aqui
];

jewelryItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("jewelry-card");

    // Crie um link de âncora (<a>) ao redor da imagem para abrir no WhatsApp com a mensagem desejada e o número de telefone
    const imageLink = document.createElement("a");
    const mensagem = encodeURIComponent(`Olá, gostaria de saber se o item "${item.nome}" está disponível.`);
    const telefone = encodeURIComponent(item.telefone);
    const whatsappLink = `https://wa.me/${telefone}/?text=${mensagem}`;
    imageLink.href = whatsappLink; // Use o link do WhatsApp com a mensagem e número de telefone
    imageLink.target = "_blank"; // Para abrir em uma nova aba

    const imagem = document.createElement("img");
    imagem.src = item.imagem; // Use o mesmo caminho da imagem
    imagem.alt = item.nome;

    imageLink.appendChild(imagem); // Adicione a imagem ao link de âncora

    const nome = document.createElement("h2");
    nome.textContent = item.nome;

    const preco = document.createElement("p");
    preco.textContent = item.preco;

 // Botão para chamar no WhatsApp
 const whatsappButton = document.createElement("button");
 whatsappButton.textContent = "Chamar no WhatsApp";
 whatsappButton.addEventListener("click", () => {
     window.open(whatsappLink, "_blank"); // Abre o link do WhatsApp em uma nova aba ao clicar no botão
 });
    

    card.appendChild(imageLink); // Adicione o link de âncora com a imagem ao cartão
    card.appendChild(nome);
    card.appendChild(preco);
    card.appendChild(whatsappButton);


    catalog.appendChild(card);
});
