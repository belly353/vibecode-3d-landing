# 🌟 Vibecode 3D Landing Page

Uma landing page conversiva e interativa no estilo Vibecode com efeitos 3D vibrantes, animações fluidas e design moderno.

## ✨ Características

### 🎨 Design Vibrante
- Paleta de cores neon vibrante (Verde #00ff88, Magenta #ff00ff, Cyan #00d4ff)
- Gradientes dinâmicos e glows
- Tema escuro com acentos luminosos

### 🎬 Animações 3D
- Cubos flutuantes com animações 3D
- Caixa rotativa 3D com 6 faces
- Efeitos de parallax ao scrollar
- Transições suaves em todos os elementos

### 🖱️ Interatividade
- Cards de recursos com efeito 3D ao passar o mouse
- Caixa 3D que segue o movimento do mouse
- Efeitos de ripple em botões
- Navegação suave entre seções

### 📱 Responsivo
- Design totalmente responsivo para desktop, tablet e mobile
- Menu hamburger para dispositivos pequenos
- Otimizado para todas as resoluções

### ⚡ Performance
- Particle system leve com canvas
- Lazy loading de imagens
- Intersection Observer para animações otimizadas
- Scroll passivo para melhor performance

## 🚀 Seções

### 1. **Navbar**
- Logo animado com cubo rotativo
- Menu de navegação com links suaves
- Backdrop blur com transparência

### 2. **Hero Section**
- Título com animação glitch
- Subtítulo elegante
- Botão CTA com efeito glow
- Canvas 3D com partículas flutuantes
- Cubos flutuantes decorativos

### 3. **Features**
- 6 cards de recursos com icons 3D
- Efeito hover com transformação 3D
- Animação de borda inferior
- Descrições de cada recurso

### 4. **Showcase**
- Demonstração de caixa 3D rotativa
- Cada face com label único
- Rotação contínua em 3D

### 5. **Pricing**
- 3 planos de preços (Starter, Professional, Enterprise)
- Card destacado (mais popular)
- Lista de features por plano
- Botões com estilos diferentes

### 6. **Testimonials**
- Cards de depoimentos com estrelas
- Avatares com gradientes
- Auto-rotação dos depoimentos
- Efeito hover com elevação

### 7. **CTA Section**
- Chamada para ação final
- Dois botões (primário e secundário)
- Fundo com gradiente

### 8. **Footer**
- Links rápidos
- Redes sociais
- Informações de copyright

## 📁 Estrutura de Arquivos

```
vibecode-3d-landing/
├── index.html       # Estrutura HTML
├── styles.css       # Estilos e animações
├── script.js        # Interatividade e lógica
└── README.md        # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados, animações e efeitos 3D
- **JavaScript Vanilla** - Interatividade sem dependências
- **Canvas API** - Efeitos 3D e partículas
- **Intersection Observer** - Animações otimizadas

## 🎯 Funcionalidades JavaScript

### Animações
- Partículas flutuantes com opacity dinâmica
- Animações de scroll reveal
- Efeitos glitch no título
- Transições suaves

### Interatividade
- Detecção de mouse para efeitos 3D
- Ripple effect em cliques
- Menu mobile responsivo
- Navegação com scroll suave

### Otimização
- Lazy loading de imagens
- Scroll performance optimization
- Intersection Observer para animações
- Event delegation para eficiência

## 🎨 Paleta de Cores

```css
--primary: #00ff88;      /* Verde Neon */
--secondary: #ff00ff;    /* Magenta */
--tertiary: #00d4ff;     /* Cyan */
--dark: #0a0e27;         /* Azul Escuro */
--darker: #050812;       /* Quase Preto */
--accent: #ff006e;       /* Rosa Quente */
```

## 📊 Efeitos CSS Principais

### Transform 3D
- `perspective` - Profundidade visual
- `rotateX`, `rotateY`, `rotateZ` - Rotações 3D
- `translateZ` - Profundidade
- `scale` - Ampliação com efeitos

### Filtros
- `blur` - Desfoque de fundo
- `drop-shadow` - Sombra com blur
- `brightness` - Ajuste de brilho

### Animações
- `@keyframes` customizadas
- `animation-delay` para sequências
- `transition` para suavidade

## 🔧 Personalizações

### Mudar Cores
Edite as variáveis CSS no `:root`:

```css
:root {
    --primary: #00ff88;
    --secondary: #ff00ff;
    --tertiary: #00d4ff;
    /* ... mais cores */
}
```

### Ajustar Velocidades
Modifique a duração das animações:

```css
animation: glitch 3s ease-in-out infinite; /* Mude o 3s */
```

### Adicionar Mais Seções
1. Copie a estrutura HTML de uma seção existente
2. Customize o conteúdo
3. Estile no CSS com classes similares

## 📱 Breakpoints Responsivos

- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🚀 Como Usar

### 1. Clonar Repositório
```bash
git clone https://github.com/belly353/vibecode-3d-landing.git
cd vibecode-3d-landing
```

### 2. Abrir no Navegador
```bash
# Abra o arquivo index.html diretamente ou use:
python -m http.server 8000
# Acesse http://localhost:8000
```

### 3. Deploy
- **GitHub Pages**: Push para a branch `main`
- **Netlify**: Conecte o repositório
- **Vercel**: Importe o repositório

## ⚙️ Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lighthouse Score**: 90+
- **Page Load**: < 2s
- **Time to Interactive**: < 3s
- **Particle Count**: 50 máximo
- **60 FPS**: Animações suaves

## 🔒 Segurança

- Sem dependências externas
- Sem tracking de terceiros
- Código vanilla sem vulnerabilidades
- HTTPS pronto

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma Issue no GitHub
- Verifique a documentação
- Consulte os comentários no código

## 🎓 Aprender Mais

- [CSS 3D Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animation Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

## 🌟 Destaques

- ✨ Sem jQuery ou Bootstrap
- 🚀 Totalmente responsivo
- 🎨 Altamente customizável
- ⚡ Super rápido e leve
- 🎯 Otimizado para conversão

## 📊 Estrutura de SEO

- Meta tags completas
- Semantic HTML5
- Structured data ready
- Performance otimizada
- Mobile-first approach

## 🔄 Atualizações Futuras

- [ ] Modo escuro adicional
- [ ] Mais efeitos 3D
- [ ] Sistema de temas
- [ ] Integração com analytics
- [ ] Blog section
- [ ] Newsletter signup

## 👨‍💻 Autor

**belly353** - [GitHub Profile](https://github.com/belly353)

## 🙏 Agradecimentos

Obrigado por usar Vibecode 3D! Se gostou, não esqueça de dar uma ⭐ no repositório!

---

**Vibecode 3D** - Transformando ideias em experiências 3D imersivas ✨