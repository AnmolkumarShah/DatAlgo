import "./colorIndicator-style.css";

export const ColorIndicator = ({ indicator }) => {
  return (
    <ul className="color-info m-0 p-0">
      {indicator.map((i) => {
        return (
          <div>
            <li className="box" style={{ backgroundColor: i.color }}></li>
            <li>{i.name}</li>
          </div>
        );
      })}
    </ul>
  );
};
