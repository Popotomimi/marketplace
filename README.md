# Market Place App

Aplicativo mobile desenvolvido com React Native e Expo, seguindo arquitetura MVVM e usando um stack moderno e atual de tecnologias.

## Visão Geral

Este projeto é uma aplicação de marketplace mobile que utiliza as melhores práticas do mercado:

- Arquitetura MVVM (Model-View-ViewModel)
- Expo Router para navegação baseada em pastas
- TypeScript para tipagem segura
- NativeWind + Tailwind CSS para estilos reutilizáveis e responsivos
- React Query para cache e gerenciamento de dados assíncronos
- Zustand para estado global leve
- React Hook Form + Yup para validação de formulários

## Tecnologias Principais

- `expo` (~54.0.25)
- `react` (19.1.0)
- `react-native` (0.81.5)
- `expo-router`
- `nativewind`
- `@tanstack/react-query`
- `zustand`
- `axios`
- `react-hook-form`
- `yup`
- `@gorhom/bottom-sheet`
- `expo-image-picker`
- `toastify-react-native`

## Estrutura do Projeto

- `app/` - configuração do Expo Router e navegação do aplicativo
- `src/` - código principal do aplicativo
  - `app/` - telas públicas e privadas, layouts, rotas
  - `shared/` - componentes, hooks, serviços, interfaces, store e helpers
  - `viewModels/` - modelos de visualização e lógica de apresentação do MVVM
- `assets/` - imagens, ícones e recursos estáticos
- `android/` - configuração nativa e arquivos de build Android

## Como Executar

1. Instalar dependências

```bash
cd market-place-app
npm install
```

2. Iniciar o Expo

```bash
npm run start
```

3. Executar no emulador ou dispositivo

```bash
npm run android
```

ou

```bash
npm run ios
```

ou

```bash
npm run web
```

## Configurações Importantes

- `app.json` contém as configurações do Expo, permissões Android e plugins usados
- `tsconfig.json` habilita `strict` para maior segurança de tipo
- `tailwind.config.js` integra o Tailwind com o NativeWind

## Observações

- O projeto está preparado para trabalhar com API via `axios` e `React Query`
- Formulários utilizam `react-hook-form` com validação `yup`
- A navegação é declarativa e organizada com `expo-router`

Feito com 💙 por Roberto de Oliveira
