import PropTypes from "prop-types";
import calories from "../../assets/keydataIcon/calories-icon.svg";
import carbs from "../../assets/keydataIcon/carbs-icon.svg";
import fat from "../../assets/keydataIcon/fat-icon.svg";
import protein from "../../assets/keydataIcon/protein-icon.svg";
import "../../styles/keyData.css";
import { numberFormater } from "../../utils/textFormatter";
import Card from "./keyDataCard";

function KeyData({ data }) {
  const keyDataValues = [
    {
      type: "Calories",
      src: calories,
      quantity: `${numberFormater(data.calorieCount)}kCal`,
    },
    { type: "Protéines", src: protein, quantity: `${data.proteinCount}g` },
    { type: "Glucides", src: carbs, quantity: `${data.carbohydrateCount}g` },
    { type: "Lipides", src: fat, quantity: `${data.lipidCount}g` },
  ];
  return (
    <div className="Ss-key-data">
      {keyDataValues.map((entry, index) => {
        return (
          <Card
            key={`cell-${index}`}
            type={entry.type}
            src={entry.src}
            quantity={entry.quantity}
          />
        );
      })}
    </div>
  );
}

KeyData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default KeyData;
