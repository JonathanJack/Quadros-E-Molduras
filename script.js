 // Produtos fictícios
    const produtos = [
      {
        nome: 'Quadro Minimalista',
        tamanho: '30 × 40 cm',
        valor: 89.90,
        categoria: 'Quadros',
        imagem: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Composição Abstrata',
        tamanho: '50 × 70 cm',
        valor: 149.90,
        categoria: 'Quadros',
        imagem: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Moldura Natural',
        tamanho: '20 × 30 cm',
        valor: 59.90,
        categoria: 'Molduras',
        imagem: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Quadro Botânico',
        tamanho: '40 × 60 cm',
        valor: 119.90,
        categoria: 'Quadros',
        imagem: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Moldura Clássica',
        tamanho: '30 × 40 cm',
        valor: 74.90,
        categoria: 'Molduras',
        imagem: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Arte Contemporânea',
        tamanho: '50 × 70 cm',
        valor: 169.90,
        categoria: 'Quadros',
        imagem: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Moldura Clean',
        tamanho: '21 × 30 cm',
        valor: 49.90,
        categoria: 'Molduras',
        imagem: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85'
      },
      {
        nome: 'Quadro Paisagem',
        tamanho: '60 × 90 cm',
        valor: 199.90,
        categoria: 'Quadros',
        imagem: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=900&q=85'
      }
    ];

    const formatarPreco = valor =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(valor);

    const productContainer = document.getElementById('products');

    const criarCard = (produto, indice) => {
      const col = document.createElement('div');
      col.className = 'col';

      const article = document.createElement('article');
      article.className = 'product-card h-100';

      const media = document.createElement('div');
      media.className = 'product-image';

      const img = document.createElement('img');
      img.src = produto.imagem;
      img.alt = `Imagem ilustrativa: ${produto.nome}`;
      img.loading = indice < 4 ? 'eager' : 'lazy';

      img.addEventListener('error', () => {
        media.classList.add('image-fallback');
        img.style.display = 'none';
      });

      const category = document.createElement('span');
      category.className = 'product-category';
      category.textContent = produto.categoria;

      media.append(img, category);

      const info = document.createElement('div');
      info.className = 'product-details';

      const title = document.createElement('h3');
      title.textContent = produto.nome;

      const size = document.createElement('p');
      size.className = 'product-size';
      size.textContent = produto.tamanho;

      const price = document.createElement('strong');
      price.className = 'product-price';
      price.textContent = formatarPreco(produto.valor);

      info.append(title, size, price);
      article.append(media, info);
      col.append(article);

      return col;
    };

    function renderizarProdutos(filtro = 'Todos') {
      const filtrados = filtro === 'Todos'
        ? produtos
        : produtos.filter(p => p.categoria === filtro);

      productContainer.replaceChildren(
        ...filtrados.map(criarCard)
      );
    }

    renderizarProdutos();

    document.querySelectorAll('[data-filter]').forEach(botao => {
      botao.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });

        botao.classList.add('active');
        botao.setAttribute('aria-pressed', 'true');

        renderizarProdutos(botao.dataset.filter);
      });
    });

    document.getElementById('year').textContent =
      new Date().getFullYear();

    document.getElementById('whatsapp-btn').addEventListener('click', () => {
      alert('WhatsApp demonstrativo: substitua pelo número verdadeiro da loja.');
    });

    document.querySelectorAll('#menu .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.getElementById('menu');

        if (menu.classList.contains('show') && window.bootstrap) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });

 document.getElementById('whatsapp-btn').addEventListener('click', () => {
  alert('WhatsApp demonstrativo: substitua pelo número verdadeiro da loja.');
});