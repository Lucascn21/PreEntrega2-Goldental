![](anotherbs.gif)
# Objetivos.
Navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.
# Consigna.
Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom

**Componentes:**

**`Navbar con cart`**

**`Catálogo`**

**`Detalle de producto`**

# Se debe entregar.
Rutas a configurar

**‘/’ navega a `<ItemListContainer />`**

**‘/category/:id’  `<ItemListContainer />`**

**‘/item/:id’ navega a `<ItemDetailContainer />`**

# Links a configurar
**Clickear en el brand debe navegar a `‘/’`**

**Clickear un Item.js debe navegar  `/item/:id`**

**Clickear en una categoría del navbar debe navegar a `/category/:categoryId `**

### Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

