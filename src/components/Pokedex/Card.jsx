function Card({ pokemon }) {
  const { url_image, pokemon: name, type_1, type_2 } = pokemon;

  return (
    <li>
      <img src={url_image} alt={name} />

      <h2 title={name}>{name}</h2>

      <div>
        <Type type={type_1} />
        <Type type={type_2} />
      </div>
    </li>
  );
}
