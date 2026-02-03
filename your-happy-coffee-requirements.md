# Your Happy Coffee — Requirements Documentation
**Versão:** 1.0  
**Data:** 02 de Fevereiro de 2026  
**Projeto:** Website institucional para cafeteria moderna e emocional

---

## 📋 Índice

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Identidade Visual e Branding](#2-identidade-visual-e-branding)
3. [Stack Técnica](#3-stack-técnica)
4. [Design System](#4-design-system)
5. [Estrutura de Páginas e Seções](#5-estrutura-de-páginas-e-seções)
6. [Requisitos de UX e Acessibilidade](#6-requisitos-de-ux-e-acessibilidade)
7. [Requisitos de Performance](#7-requisitos-de-performance)
8. [Conteúdo e Tom de Voz](#8-conteúdo-e-tom-de-voz)
9. [Integrações e Funcionalidades](#9-integrações-e-funcionalidades)
10. [Entregáveis do Projeto](#10-entregáveis-do-projeto)
11. [Cronograma e Fases](#11-cronograma-e-fases)

---

## 1. Visão Geral do Projeto

### 1.1 Definição do Projeto

**Your Happy Coffee** é uma cafeteria jovem e familiar que vai além do café — é um movimento de bem-estar, conexão humana e momentos autênticos. O website deve funcionar como a extensão digital dessa filosofia, priorizando experiência emocional sobre técnica de grãos, e **estados de mind** sobre métodos de preparo.

### 1.2 Propósito do Website

- **Primário**: Converter curiosidade (vinda do Instagram/TikTok) em visita física
- **Secundário**: Criar lealdade emocional através de conteúdo relevante e navegação fluida
- **Terciário**: Estabelecer a marca como movimento de bem-estar urbano, não apenas cafeteria

### 1.3 Público-Alvo Principal

| Persona         | Idade   | Comportamento                                              | Expectativa do Site                              |
| --------------- | ------- | ---------------------------------------------------------- | ------------------------------------------------ |
| **Ana**         | 22-28   | Trabalha remoto, busca espaço acolhedor e café bom         | Encontrar local próximo, ver ambiente, sem ruído |
| **Pedro**       | 19-25   | Sociável, vai com amigos, valoriza diversidade             | Ver se tem espaço pra grupo, vibe do lugar       |
| **Carol**       | 28-35   | Mãe recente, precisa de espaço baby-friendly               | Saber se tem espaço pra carrinho, mesas quietas  |
| **Mateus**      | 24-30   | Criativo, valoriza estética e propósito                    | Inspiração visual, conexão com valores da marca  |
| **Gen Z Geral** | 18-26   | Rejeita performance, valoriza autenticidade e saúde mental | Navegação sem fricção, transparência, valores    |

### 1.4 Origem do Tráfego

- **Instagram/TikTok**: 60% (conteúdo visual orgânico)
- **Google Search**: 20% (busca local: "cafeteria perto de mim")
- **Passagem física**: 15% (QR code na loja, cartão de visita)
- **Boca a boca / Link direto**: 5%

---

## 2. Identidade Visual e Branding

### 2.1 Naming e Slogan

| Elemento        | Valor                                 |
| --------------- | ------------------------------------- |
| **Nome**        | Your Happy Coffee                     |
| **Slogan**      | Café que faz bem ao corpo e à alma.   |
| **Fonte Nome**  | Charm (display, amigável, arredondada) |
| **Fonte Slogan**| Myanmar Text (legível, suave)         |

### 2.2 Logotipo

**Características:**
- Aplicado em **diversas formas** (responsivo: versão horizontal, vertical, ícone)
- Sempre **colorida** (nunca usar versão negativa como padrão)
- Identidade visual baseada em **círculos e curvas** (nada angular ou agressivo)
- Deve funcionar em fundos claros e escuros sem perder legibilidade

**Formatos a serem criados:**
- Logo horizontal (header desktop)
- Logo empilhada (mobile, footer)
- Ícone isolado (favicon, app icon)
- Versão monocromática (apenas para casos de impressão especial)

### 2.3 Paleta de Cores

| Cor       | Hex Code | Uso Principal                                    | Significado Emocional       |
| --------- | -------- | ------------------------------------------------ | --------------------------- |
| **Roxo Escuro** | `#281D33` | Backgrounds, headers, texto principal       | Sofisticação, profundidade  |
| **Lavanda**     | `#AD7EDC` | CTAs, destaques, links, botões primários    | Calma, criatividade         |
| **Cinza Suave** | `#7F7886` | Texto secundário, borders, elementos neutros | Neutralidade, equilíbrio    |
| **Branco Quente**| `#F5EEFF` | Background principal, cards, espaços em branco | Leveza, acolhimento        |

**Variações de Estado (derivadas):**
- Hover: `#AD7EDC` com 80% de opacidade
- Focus: `#AD7EDC` com outline `#281D33`
- Disabled: `#7F7886` com 38% de opacidade

### 2.4 Elementos Gráficos

**Elementos visuais permitidos:**
- ✅ Formas livres e orgânicas (blobs, manchas suaves)
- ✅ Curvas e ondas
- ✅ Ilustrações de: copos, canecas, garrafas, crepes, comidas
- ✅ Fotos reais de pessoas em momentos variados (sozinhas, com amigos, trabalhando)
- ✅ Ícones circulares

**Elementos a evitar:**
- ❌ Formas angulares e geométricas duras
- ❌ Fotos stock polidas e genéricas
- ❌ Ilustrações flat e corporativas
- ❌ Ícones quadrados ou retos

### 2.5 Tipografia

| Uso                     | Font Family    | Peso       | Tamanho Referência |
| ----------------------- | -------------- | ---------- | ------------------ |
| **Headings (H1-H2)**    | Charm          | Regular    | 36px - 48px        |
| **Subheadings (H3-H4)** | Charm          | Regular    | 24px - 32px        |
| **Body Text**           | Myanmar Text   | Regular    | 16px               |
| **Small Text**          | Myanmar Text   | Regular    | 14px               |
| **CTAs/Botões**         | Myanmar Text   | Medium     | 16px               |

**Hierarquia Visual:**
- Títulos emocionais grandes (H1) devem ter **line-height: 1.2** para impacto
- Corpo de texto deve ter **line-height: 1.6** para legibilidade
- Espaçamento entre parágrafos: **mínimo 16px**

### 2.6 Persona da Marca

**Arquétipo:** Cafeteria jovem, familiar, moderna e energética

**Características:**
- Acolhedora sem ser maternal
- Direta sem ser fria
- Jovem sem ser imatura
- Energética sem ser exagerada
- Moderna sem ser excludente

**Tom de Voz:**
- **Direta e curta**: frases de no máximo 15 palavras
- **Humana**: evitar jargão técnico ou corporativo
- **Vulnerável quando apropriado**: mostrar imperfeições reais
- **Otimista sem ser tóxica**: reconhecer dias difíceis, mas oferecer conforto

---

## 3. Stack Técnica

### 3.1 Frontend

| Tecnologia       | Versão       | Justificativa                                              |
| ---------------- | ------------ | ---------------------------------------------------------- |
| **Next.js**      | 15.x         | App Router, otimização automática, SSR/SSG                 |
| **React**        | 19.x         | Componentização, ecosystem robusto                         |
| **TypeScript**   | 5.x          | Type safety, manutenibilidade                              |
| **CSS Puro**     | CSS3         | Sem frameworks, controle total do design M3                |
| **Framer Motion**| Latest       | Animações suaves e naturais (não jittery)                  |

**Nota:** Não usar TailwindCSS. Implementar Design System baseado em Material Design 3 com CSS Variables puro.

### 3.2 Gerenciamento de Estado

- **React Hooks** (useState, useContext) para estado local
- **Sem Redux ou Zustand** (projeto pequeno, não justifica)

### 3.3 Hospedagem e Deploy

| Serviço       | Uso                                  |
| ------------- | ------------------------------------ |
| **Vercel**    | Hosting, CI/CD automático            |
| **GitHub**    | Versionamento, repositório principal |

### 3.4 Ferramentas de Desenvolvimento

| Tool                  | Propósito                             |
| --------------------- | ------------------------------------- |
| **ESLint**            | Linting de código TypeScript/React    |
| **Prettier**          | Formatação consistente                |
| **Lighthouse**        | Auditoria de performance e a11y       |
| **axe-core**          | Testes de acessibilidade              |
| **React DevTools**    | Debug de componentes                  |

---

## 4. Design System

### 4.1 Material Design 3 — Tokens CSS

**Localização:** `/app/globals.css` (raiz do projeto)

#### 4.1.1 Color Tokens

```css
:root {
  /* System Colors (Material 3) */
  --m3-sys-color-primary: #AD7EDC;
  --m3-sys-color-on-primary: #FFFFFF;
  --m3-sys-color-primary-container: #f5eeffff;
  --m3-sys-color-on-primary-container: #281D33;

  --m3-sys-color-secondary: #7F7886;
  --m3-sys-color-on-secondary: #FFFFFF;

  --m3-sys-color-error: #B3261E;
  --m3-sys-color-on-error: #FFFFFF;

  --m3-sys-color-surface: #F5EEFF;
  --m3-sys-color-on-surface: #281D33;

  --m3-sys-color-surface-variant: #E7E0EC;
  --m3-sys-color-on-surface-variant: #7F7886;

  --m3-sys-color-outline: #AD7EDC;
}
```

#### 4.1.2 Typography Tokens

```css
:root {
  --m3-font-family-display: "Charm", cursive;
  --m3-font-family-sans: "Myanmar Text", ui-sans-serif, system-ui, sans-serif;

  --m3-type-display-large-size: 48px;
  --m3-type-display-large-line: 56px;
  --m3-type-display-large-weight: 400;

  --m3-type-headline-large-size: 36px;
  --m3-type-headline-large-line: 44px;
  --m3-type-headline-large-weight: 400;

  --m3-type-body-large-size: 16px;
  --m3-type-body-large-line: 24px;
  --m3-type-body-large-weight: 400;

  --m3-type-label-large-size: 16px;
  --m3-type-label-large-line: 20px;
  --m3-type-label-large-weight: 500;
}
```

#### 4.1.3 Shape Tokens (Curvas)

```css
:root {
  --m3-shape-none: 0px;
  --m3-shape-xs: 4px;
  --m3-shape-s: 8px;
  --m3-shape-m: 12px;
  --m3-shape-l: 16px;
  --m3-shape-xl: 28px;
  --m3-shape-full: 999px;  /* Círculos perfeitos */
}
```

#### 4.1.4 Spacing Tokens (Grid 4dp)

```css
:root {
  --m3-space-1: 4px;
  --m3-space-2: 8px;
  --m3-space-3: 12px;
  --m3-space-4: 16px;
  --m3-space-6: 24px;
  --m3-space-8: 32px;
  --m3-space-10: 40px;
  --m3-space-12: 48px;
  --m3-space-16: 64px;
}
```

#### 4.1.5 Elevation Tokens (Sombras Suaves)

```css
:root {
  --m3-shadow-1: 0 1px 2px rgba(40, 29, 51, 0.08);
  --m3-shadow-2: 0 4px 14px rgba(40, 29, 51, 0.10);
  --m3-shadow-3: 0 10px 30px rgba(40, 29, 51, 0.12);
}
```

#### 4.1.6 Motion Tokens

```css
:root {
  --m3-motion-fast: 150ms;
  --m3-motion-med: 220ms;
  --m3-motion-slow: 320ms;
  --m3-ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

### 4.2 Componentes Base (HTML + CSS)

#### 4.2.1 Botões

**HTML:**
```html
<button class="m3-btn m3-btn--filled">Encontre sua xícara hoje</button>
<button class="m3-btn m3-btn--tonal">Ver cardápio</button>
<button class="m3-btn m3-btn--outlined">Saiba mais</button>
```

**CSS:**
```css
.m3-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;  /* Acessibilidade: target mínimo */
  min-width: 48px;
  padding: 0 var(--m3-space-6);
  border-radius: var(--m3-shape-full);
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  font-family: var(--m3-font-family-sans);
  font-size: var(--m3-type-label-large-size);
  font-weight: var(--m3-type-label-large-weight);
  transition: transform var(--m3-motion-fast) var(--m3-ease-standard);
}

.m3-btn--filled {
  background: var(--m3-sys-color-primary);
  color: var(--m3-sys-color-on-primary);
}

.m3-btn--tonal {
  background: var(--m3-sys-color-primary-container);
  color: var(--m3-sys-color-on-primary-container);
}

.m3-btn--outlined {
  background: transparent;
  border-color: var(--m3-sys-color-outline);
  color: var(--m3-sys-color-on-surface);
}

.m3-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--m3-shadow-2);
}

.m3-btn:active {
  transform: translateY(0);
}

.m3-btn:focus-visible {
  outline: 2px solid var(--m3-sys-color-primary);
  outline-offset: 3px;
}
```

#### 4.2.2 Cards

**HTML:**
```html
<article class="m3-card m3-card--elevated">
  <h3 class="m3-card__title">Tá cansado?</h3>
  <p class="m3-card__body">Cafés quentes, cremosos e reconfortantes que te abraçam.</p>
</article>
```

**CSS:**
```css
.m3-card {
  border-radius: var(--m3-shape-l);
  padding: var(--m3-space-6);
  transition: transform var(--m3-motion-med) var(--m3-ease-standard);
}

.m3-card--elevated {
  background: var(--m3-sys-color-surface);
  box-shadow: var(--m3-shadow-2);
}

.m3-card:hover {
  transform: scale(1.02);
  box-shadow: var(--m3-shadow-3);
}

.m3-card__title {
  margin: 0 0 var(--m3-space-2);
  font-family: var(--m3-font-family-display);
  font-size: var(--m3-type-headline-large-size);
  color: var(--m3-sys-color-on-surface);
}

.m3-card__body {
  margin: 0;
  font-family: var(--m3-font-family-sans);
  font-size: var(--m3-type-body-large-size);
  line-height: var(--m3-type-body-large-line);
  color: var(--m3-sys-color-on-surface-variant);
}
```

### 4.3 Layout Responsivo (Window Size Classes)

| Breakpoint   | Largura      | Grid Columns | Padding Lateral |
| ------------ | ------------ | ------------ | --------------- |
| Compact      | < 600px      | 4 cols       | 16px            |
| Medium       | 600px - 839px| 8 cols       | 24px            |
| Expanded     | 840px - 1199px| 12 cols     | 32px            |
| Large        | 1200px - 1599px| 12 cols    | 40px            |
| Extra-large  | >= 1600px    | 12 cols      | 40px            |

**CSS:**
```css
.m3-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--m3-space-4);
  max-width: 1200px;
}

@media (min-width: 600px) {
  .m3-container { padding: 0 var(--m3-space-6); }
}

@media (min-width: 1200px) {
  .m3-container { max-width: 1400px; }
}
```

---

## 5. Estrutura de Páginas e Seções

### 5.1 Arquitetura de Informação

```
Home (/)
├── Hero Emocional
├── Carrossel de Estados de Mind
├── Localização Próxima
└── Primeira Xícara (Teaser)

Nosso Jeito (/sobre)
├── Narrativa da Fundadora
├── Missão, Visão, Valores
└── Fotos do Time

Cardápio (/cardapio)
├── Filtro por Estado de Mind
│   ├── Tá cansado?
│   ├── Tá animado?
│   ├── Tá com companhia?
│   └── Momento só seu?
└── Itens com Descrições Humanas

Nossos Espaços (/espacos)
├── Galeria de Fotos Reais
├── Descrição de Cada Unidade
└── Mapa Interativo

Momentos (/momentos)
└── Conteúdo Inspirador (Blog-like)

Primeira Xícara (/primeira-xicara)
├── Explicação da Campanha
└── Formulário/Cupom

Footer
├── Trabalhe Conosco
├── Fale com a Gente
└── Redes Sociais
```

### 5.2 Home Page — Seções Detalhadas

#### 5.2.1 Hero Emocional

**Componente:** `components/home/Hero.tsx`

**Estrutura Visual:**
- Imagem de fundo (foto real: pessoas em momentos variados)
- Overlay suave (gradient roxo escuro com 60% de opacidade)
- Título emocional centralizado
- Subtítulo curto
- CTA principal

**Conteúdo:**
- **Título (H1):** "O café que te abraça, não o que te impressiona"
- **Subtítulo:** "Você merece esse momento."
- **CTA:** "Encontre sua xícara hoje"

**Especificações Técnicas:**
- Altura: 100vh (mobile), 80vh (desktop)
- Título: 48px (mobile), 64px (desktop)
- CTA: Botão filled primário
- Animação de entrada: Fade-in 800ms com slight slide-up

**Placeholder de Imagem:**
```html
<!-- CONTEÚDO REAL: Foto de 3-4 pessoas em momentos variados:
     - 1 pessoa sozinha lendo
     - 2 amigos conversando
     - 1 pessoa trabalhando no laptop
     Luz natural, ambiente real da cafeteria, cores quentes -->
<img src="/placeholder-hero.jpg" alt="Momentos reais na Your Happy Coffee" />
```

#### 5.2.2 Carrossel de Estados de Mind

**Componente:** `components/home/EstadosDeMindCarousel.tsx`

**Estrutura:**
- 4 cards deslizantes (swipe horizontal em mobile)
- Cada card com:
  - Ícone circular (ilustração custom)
  - Título do estado
  - Descrição curta
  - Link para cardápio filtrado

**Estados:**

| Estado           | Ícone Sugerido      | Descrição                              | Cor de Destaque |
| ---------------- | ------------------- | -------------------------------------- | --------------- |
| Tá cansado?      | ☕ Caneca quentinha  | Quentes, cremosos, reconfortantes      | `#AD7EDC`       |
| Tá animado?      | 🧊 Copo gelado      | Gelados, energizantes, leves           | `#7F7886`       |
| Tá com companhia?| 🍰 Fatia de bolo    | Coisas pra dividir, doces suaves       | `#AD7EDC`       |
| Momento só seu?  | 📖 Livro e café     | Filtrados suaves, acompanhamentos leves| `#281D33`       |

**Especificações Técnicas:**
- Mobile: 1 card visível por vez (swipe)
- Desktop: 4 cards em grid (2x2 ou 4 cols)
- Animação de hover: scale(1.05) + shadow aumenta
- Transição: 220ms ease-standard

#### 5.2.3 Localização Próxima

**Componente:** `components/home/LocationTeaser.tsx`

**Estrutura:**
- Card destacado com mapa (placeholder ou Google Maps embed)
- Informações da unidade mais próxima
- Ícones de facilidades
- CTA para ver todas as unidades

**Conteúdo (Placeholder):**
```
📍 Unidade Centro — 2km de você
☕ Tem tomada | 👶 Espaço pra carrinho | 🪑 Mesa quieta
Seg-Sex: 7h-20h | Sáb-Dom: 9h-18h
[Ver todas as unidades]
```

#### 5.2.4 Primeira Xícara (Banner)

**Componente:** `components/home/PrimeiraXicara.tsx`

**Estrutura:**
- Banner largo com círculo grande de fundo (elemento gráfico)
- Texto da oferta
- CTA secundário

**Conteúdo:**
```
Sua primeira xícara de felicidade por R$ 5
Só vem.
[Quero minha xícara]
```

**Especificações Técnicas:**
- Background: Círculo roxo (`#AD7EDC`) com 800px de diâmetro, posição: bottom-right
- Texto: Branco (`#FFFFFF`)
- CTA: Botão tonal

---

## 6. Requisitos de UX e Acessibilidade

### 6.1 Princípios de UX (Gen Z Friendly)

| Princípio                    | Implementação                                              |
| ---------------------------- | ---------------------------------------------------------- |
| **Sem Fricção**              | Máximo 3 cliques para qualquer conteúdo principal          |
| **Mobile-First**             | Design pensado primeiro para tela de 375px                 |
| **Sem Pop-ups Intrusivos**   | Nenhum banner que bloqueie conteúdo sem ação do usuário    |
| **Linguagem Direta**         | Frases com máximo 15 palavras                              |
| **Transparência**            | Valores da marca visíveis na home                          |
| **Bem-Estar Digital**        | Sem dark patterns, sem contadores de like, sem FOMO        |

### 6.2 WCAG AA Compliance

**Obrigatório:**
- Contraste mínimo de 4.5:1 para texto pequeno
- Contraste mínimo de 3:1 para elementos UI
- Todo botão/link com alvo de 48x48px (mobile)
- `aria-label` em ícones e botões sem texto
- Focus indicators visíveis em todos os elementos interativos
- Navegação por teclado funcional (Tab flow lógico)

**Verificação:**
- Lighthouse Accessibility Score ≥ 95
- axe-core sem erros críticos

### 6.3 Modo Silencioso (Opcional)

**Feature diferencial para Gen Z:**
- Toggle no header para reduzir estímulos visuais
- Quando ativado:
  - Animações são desativadas
  - Cores ficam mais suaves (desaturadas 20%)
  - Remove elementos decorativos não essenciais

**Implementação:**
```css
@media (prefers-reduced-motion: reduce) {
  * { 
    transition: none !important; 
    animation: none !important; 
  }
}
```

### 6.4 Dark Mode (Futuro)

**Não implementar no MVP**, mas preparar tokens:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --m3-sys-color-surface: #281D33;
    --m3-sys-color-on-surface: #F5EEFF;
    /* ... outros tokens invertidos */
  }
}
```

---

## 7. Requisitos de Performance

### 7.1 Métricas Objetivo (Lighthouse)

| Métrica                     | Target | Crítico |
| --------------------------- | ------ | ------- |
| **Performance**             | ≥ 90   | ≥ 80    |
| **Accessibility**           | ≥ 95   | ≥ 90    |
| **Best Practices**          | ≥ 90   | ≥ 85    |
| **SEO**                     | ≥ 95   | ≥ 90    |
| **First Contentful Paint**  | < 2s   | < 3s    |
| **Largest Contentful Paint**| < 2.5s | < 4s    |
| **Time to Interactive**     | < 3s   | < 5s    |

### 7.2 Otimizações Obrigatórias

**Imagens:**
- Usar `next/image` para otimização automática
- Formatos WebP/AVIF
- Lazy loading para imagens fora da viewport inicial
- Placeholder blur enquanto carrega

**JavaScript:**
- Code splitting por rota (Next.js automático)
- Tree shaking
- Sem bibliotecas pesadas desnecessárias

**CSS:**
- CSS crítico inline no `<head>`
- Resto carregado async
- Minificação em produção

**Fonts:**
- Usar `next/font` para otimização
- Preload de fontes críticas (Charm, Myanmar Text)
- Subset fonts (apenas Latin)

### 7.3 Testes de Performance

**Desktop:**
- Chrome DevTools Lighthouse
- Teste em throttling 4G

**Mobile:**
- Lighthouse em emulação mobile
- Teste em throttling 3G
- Teste em dispositivo real (Android mid-range)

---

## 8. Conteúdo e Tom de Voz

### 8.1 Princípios de Escrita

| Princípio                | Regra                                               | Exemplo                                                    |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------- |
| **Brevidade**            | Máximo 15 palavras por frase                        | ✅ "Você merece esse momento." ❌ "Nós acreditamos que cada cliente merece..." |
| **Direta**               | Evitar rodeios e jargão                             | ✅ "Vem sentir" ❌ "Convidamos você a experimentar"        |
| **Humana**               | Falar como pessoa, não como marca                   | ✅ "Tá cansado? A gente te entende." ❌ "Oferecemos soluções para fadiga" |
| **Vulnerável**           | Admitir imperfeições quando relevante               | ✅ "Nem todo dia é feliz. Mas tem café." ❌ "Somos perfeitos em tudo" |
| **Sem Técnica**          | Nunca falar de origem de grãos como destaque        | ✅ "Te abraça sem pesar" ❌ "Torra francesa, notas de chocolate" |

### 8.2 Glossário de Termos Proibidos

**Evitar:**
- "Experiência premium"
- "Excelência em café"
- "Métodos artesanais"
- "Grãos selecionados"
- "Blend exclusivo"
- "Ambiente sofisticado"

**Usar:**
- "Café que faz bem"
- "Momento seu"
- "Jeito acolhedor"
- "Café gostoso"
- "Lugar pra você"
- "Espaço que te recebe"

### 8.3 Exemplos de Copy Aprovado

**Hero:**
- "O café que te abraça, não o que te impressiona"
- "Você merece esse momento"
- "Café bom, jeito simples"

**Cardápio:**
- "Te abraça sem pesar no estômago" (em vez de "notas de chocolate amargo")
- "Pra quando você só quer um momento quieto" (em vez de "ideal para degustação solo")
- "Gelado e leve pra te animar" (em vez de "cold brew energizante premium")

**Sobre:**
- "Não somos uma cafeteria. Somos um movimento."
- "Existimos pra fazer parte do seu dia de um jeito que te faz se sentir melhor."

### 8.4 FAQ Estruturado (Gen Z Friendly)

**Formato:** Pergunta direta → Resposta curta e honesta

**Exemplos:**

**Q: Por que "Your Happy Coffee"?**  
A: Porque café deveria ser sobre como você se sente, não sobre método de torra.

**Q: Vocês têm opções pra quem não gosta de café?**  
A: Sim. Chá, chocolate quente, sucos naturais. A gente quer que você se sinta bem, com ou sem cafeína.

**Q: Posso trabalhar aqui o dia todo?**  
A: Pode. Tem tomada, Wi-Fi bom, e a gente não vai te pressionar pra consumir mais.

**Q: Como vocês escolhem o que vender?**  
A: A gente testa tudo. Se não faz a gente se sentir bem, não entra no cardápio.

**Q: Vocês têm programa de fidelidade?**  
A: Ainda não. Mas quando tiver, vai ser simples — sem gamificação maluca.

---

## 9. Integrações e Funcionalidades

### 9.1 Integrações Externas (MVP)

| Serviço             | Propósito                        | Implementação           |
| ------------------- | -------------------------------- | ----------------------- |
| **Google Maps**     | Mapa de unidades                 | Embed iframe            |
| **Instagram Feed**  | Galeria de fotos reais           | API do Instagram Basic Display |
| **WhatsApp**        | Contato direto com unidade       | Link `https://wa.me/`   |

### 9.2 Formulários

**Formulário de Contato** (`/contato`)
- Campos: Nome, Email, Mensagem
- Validação client-side (HTML5)
- Envio via API (Vercel Serverless Function ou Formspree)
- Feedback visual de envio (spinner + mensagem de sucesso)

**Formulário "Primeira Xícara"** (`/primeira-xicara`)
- Campos: Nome, Email, Unidade Preferida
- Gerar cupom único (código QR ou código alfanumérico)
- Armazenar em banco simples (Firebase ou Supabase)

### 9.3 Analytics (Respeitando Privacidade)

**Não usar:**
- Google Analytics (invasivo)
- Facebook Pixel (tracking excessivo)

**Usar:**
- **Plausible Analytics** ou **Umami** (open-source, privacy-friendly)
- Apenas métricas essenciais:
  - Pageviews
  - Tempo médio na página
  - Taxa de retorno
  - Origem do tráfego (Instagram, Google, Direct)

### 9.4 SEO Básico

**Meta Tags Obrigatórias:**
```html
<title>Your Happy Coffee — Café que faz bem ao corpo e à alma</title>
<meta name="description" content="Cafeteria jovem e acolhedora. Organizamos nosso cardápio por estados de mind, não por grãos. Vem sentir." />
<meta name="keywords" content="cafeteria, café, bem-estar, espaço pra trabalhar, café perto de mim" />

<!-- Open Graph (Facebook, WhatsApp) -->
<meta property="og:title" content="Your Happy Coffee" />
<meta property="og:description" content="O café que te abraça, não o que te impressiona." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://yourhappycoffee.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Happy Coffee" />
<meta name="twitter:description" content="Café que faz bem ao corpo e à alma." />
<meta name="twitter:image" content="/twitter-card.jpg" />
```

**Sitemap e Robots.txt:**
- Next.js gera automaticamente (`/sitemap.xml`)
- `robots.txt` permitindo todos os crawlers

---

## 10. Entregáveis do Projeto

### 10.1 Design

| Entregável                | Formato       | Responsável | Status |
| ------------------------- | ------------- | ----------- | ------ |
| Logotipo (4 variações)    | SVG, PNG      | Designer    | ⏳ Pendente |
| Paleta de cores (guia)    | Figma/PDF     | Designer    | ⏳ Pendente |
| Elementos gráficos        | SVG           | Designer    | ⏳ Pendente |
| Ícones customizados       | SVG           | Designer    | ⏳ Pendente |
| Fotos reais (20+ imagens) | JPG/WebP      | Fotógrafo   | ⏳ Pendente |
| Protótipo Figma (home)    | Figma         | Designer    | ⏳ Pendente |

### 10.2 Desenvolvimento

| Entregável                     | Tecnologia       | Status |
| ------------------------------ | ---------------- | ------ |
| Website institucional completo | Next.js 15       | ⏳ Em andamento |
| Design System documentado      | CSS + MD         | ⏳ Pendente |
| Componentes reutilizáveis      | React/TypeScript | ⏳ Pendente |
| Testes de acessibilidade       | axe-core         | ⏳ Pendente |
| Deploy em produção             | Vercel           | ⏳ Pendente |

### 10.3 Conteúdo

| Entregável                | Formato   | Status |
| ------------------------- | --------- | ------ |
| Textos de todas as páginas| Markdown  | ⏳ Pendente |
| FAQ estruturado            | JSON/MD   | ⏳ Pendente |
| Copy do cardápio (40+ itens)| JSON    | ⏳ Pendente |
| Descrição de unidades      | Markdown  | ⏳ Pendente |

### 10.4 Marketing (Pós-MVP)

| Entregável                 | Formato       | Status |
| -------------------------- | ------------- | ------ |
| Templates Instagram/TikTok | Figma/Canva   | ⏳ Futuro |
| Kit de imprensa            | PDF           | ⏳ Futuro |
| Menu físico                | PDF (A4)      | ⏳ Futuro |
| Embalagens personalizadas  | AI (Illustrator) | ⏳ Futuro |

---

## 11. Cronograma e Fases

### 11.1 MVP (Mínimo Produto Viável) — 4 semanas

| Semana | Fase                  | Entregáveis                                      |
| ------ | --------------------- | ------------------------------------------------ |
| 1      | Design + Setup        | Logotipo, paleta, protótipo Figma, repo GitHub   |
| 2      | Desenvolvimento Base  | Design System, componentes, Home page funcional  |
| 3      | Páginas Secundárias   | /sobre, /cardapio, /espacos, /contato            |
| 4      | Testes + Deploy       | Auditoria a11y, performance, correções, deploy   |

### 11.2 Pós-MVP — Melhorias Contínuas

**Fase 2 (1-2 meses após MVP):**
- Integração com Instagram API
- Formulário "Primeira Xícara" com cupom
- Seção "Momentos" (blog)
- Dark mode

**Fase 3 (3-6 meses após MVP):**
- Sistema de pedido online (se aplicável)
- Programa de fidelidade digital
- App mobile (PWA)

---

## 12. Referências e Inspirações

### 12.1 Websites de Referência

| Site                                    | O que observar                              |
| --------------------------------------- | ------------------------------------------- |
| [Kofi & Co](https://kofiandco.com.br/)  | Navegação fluida, fotos reais, tom amigável |
| [Coffee Five](https://coffeefive.com.br/)| Design moderno, cardápio visual             |
| [Cupping Café](https://www.cuppingcafe.com.br/)| Identidade jovem, uso de círculos  |

### 12.2 Design Systems de Referência

- [Material Design 3](https://m3.material.io/) — Base do nosso design system
- [Airbnb Design Language](https://airbnb.design/) — Referência de tom humano
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) — Qualidade e atenção a detalhes

### 12.3 Fontes de Pesquisa

- **Gen Z Behavior**: Walton Family Foundation / Gallup Voices of Gen Z Study (2024)
- **Digital Wellbeing**: McKinsey Gen Z Report (2023)
- **Accessibility**: WCAG 2.1 Guidelines
- **Performance**: Google Web Vitals

---

## 13. Critérios de Sucesso

### 13.1 Critérios Técnicos (Automáticos)

✅ Build Next.js completa sem erros  
✅ Lighthouse Performance ≥ 90  
✅ Lighthouse Accessibility ≥ 95  
✅ Todos os links funcionam (sem 404)  
✅ Responsivo em 375px, 768px, 1440px  
✅ Fontes carregam corretamente  
✅ Imagens otimizadas (WebP/AVIF)  

### 13.2 Critérios Qualitativos (Manuais)

✅ Um usuário Gen Z real identifica o tom como "genuíno"  
✅ Navegação leva no máximo 3 cliques para qualquer conteúdo  
✅ Site "sente" acolhedor, não corporativo  
✅ Design usa círculos e curvas (nada angular)  
✅ Linguagem é direta e curta (máximo 15 palavras/frase)  
✅ Nenhum elemento "tenta muito impressionar"  
✅ Valores da marca são visíveis na home  

### 13.3 Métricas de Negócio (Pós-Lançamento)

| Métrica                  | Meta 1º Mês | Meta 3 Meses |
| ------------------------ | ----------- | ------------ |
| Visitas únicas           | 1.000       | 5.000        |
| Taxa de retorno          | 30%         | 40%          |
| Tempo médio na página    | 2 min       | 3 min        |
| Taxa de conversão (visita física) | 10% | 15%         |
| NPS (Net Promoter Score) | 40          | 50           |

---

## 14. Notas Finais

### 14.1 O que NÃO fazer (Anti-Padrões)

❌ **Não usar linguagem corporativa** ("experiência premium", "excelência")  
❌ **Não sobrecarregar com animações** (menos é mais)  
❌ **Não usar fotos stock genéricas** (só fotos reais ou placeholder claro)  
❌ **Não criar pop-ups invasivos** (respeitar o espaço do usuário)  
❌ **Não gamificar excessivamente** (evitar exploração de economia de atenção)  
❌ **Não esconder valores da marca** (transparência sempre)  
❌ **Não tentar "impressionar"** (autenticidade > espetáculo)  

### 14.2 Filosofia do Projeto

Este website não é um portal corporativo. É uma **extensão digital de um movimento de bem-estar**. Cada escolha de design, cada palavra, cada animação deve servir ao objetivo de fazer o usuário se sentir:

1. **Acolhido** (não julgado)
2. **Compreendido** (não vendido)
3. **Confortável** (não pressionado)
4. **Conectado** (não isolado)

Se uma feature ou decisão não serve a esses objetivos, ela não pertence ao projeto.

---

**Fim da Documentação**

*Última atualização: 02 de Fevereiro de 2026*  
*Versão: 1.0*  
*Projeto: Your Happy Coffee*