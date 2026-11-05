function ProductCard({ titulo, precio, stock }) {
  const precioEnPesos = precio.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <article>
      <h3>{titulo}</h3>
      <p>Precio: {precioEnPesos}</p>
      <p>Stock: {stock} unidades</p>
    </article>
  );
}

export default function Productos() {
  return (
    <section>
      <h2>Catálogo de fútbol</h2>

      <ProductCard
        titulo="Balón de entrenamiento N.º 5"
        precio={19990}
        stock={8}
      />

      <ProductCard
        titulo="Camiseta de entrenamiento"
        precio={24990}
        stock={5}
      />
    </section>
  );
}