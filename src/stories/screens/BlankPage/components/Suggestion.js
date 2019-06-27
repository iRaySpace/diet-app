import * as React from "react";
import { ScrollView } from "react-native";
import DietCard from "../../../../component/DietCard";

const SUGGESTION = {
  "Fatty Liver Disease": {
    "Fruit": [
      {"text": "Grapes: 7pc. 55 grams", "img": "../../../../../assets/suggestions/grapes.jpg"},
      {"text": "Banana: 1pc. (med) 40 grams slice 55 grams", "img": "../../../../../assets/suggestions/banana.jpg"}
    ],
    "Meat": [

    ],
    "Fish": [

    ]
  },
};

class Suggestion extends React.Component {
  renderSuggestion() {
    const { disease, food } = this.props;

    // FRUIT //
    if (disease === "Fatty Liver Disease" && food === "Fruit") {
      return [
        <DietCard
          text="Grapes: 7pcs. 55 grams"
          image={require("../../../../../assets/suggestions/grapes.jpg")}
        />,
        <DietCard
          text="Banana: 1pc. (med) 40 grams slice 55 grams"
          image={require("../../../../../assets/suggestions/banana.jpg")}
        />,
        <DietCard
          text="Guava: 2pcs. (sm)"
          image={require("../../../../../assets/suggestions/guava.jpg")}
        />
      ];
    }

    if (disease === "Arthritis" && food === "Fruit") {
      return [
        <DietCard
          text="Grapes: 7pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/grapes.jpg")}
        />,
        <DietCard
          text="Banana: 1pc. (med) 2x week 40 grams"
          image={require("../../../../../assets/suggestions/banana.jpg")}
        />,
        <DietCard
          text="Guava: 2pcs. (sm) 80 grams"
          image={require("../../../../../assets/suggestions/guava.jpg")}
        />
      ];
    }

    if (disease === "Cardiovascular Disease" && food === "Fruit") {
      return [
        <DietCard
          text="Grapes: 7pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/grapes.jpg")}
        />,
        <DietCard
          text="Mangosteen: 3pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/mangosteen.jpg")}
        />,
        <DietCard
          text="Santol: 1pc. 75 grams"
          image={require("../../../../../assets/suggestions/santol.jpg")}
        />
      ];
    }

    if (disease === "Type 2 Diabetes" && food === "Fruit") {
      return [
        <DietCard
          text="Grapes: 7pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/grapes.jpg")}
        />,
        <DietCard
          text="Banana: 1pc. (med) 2x week 40 grams"
          image={require("../../../../../assets/suggestions/banana.jpg")}
        />,
        <DietCard
          text="Cashew: 1pc. 70 grams"
          image={require("../../../../../assets/suggestions/cashew.jpg")}
        />
      ];
    }

    if (disease === "Hypertension" && food === "Fruit") {
      return [
        <DietCard
          text="Grapes: 7pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/grapes.jpg")}
        />,
        <DietCard
          text="Santol: 1pc. 75 grams"
          image={require("../../../../../assets/suggestions/santol.jpg")}
        />,
        <DietCard
          text="Mangosteen: 3pcs. 3x week 55 grams"
          image={require("../../../../../assets/suggestions/mangosteen.jpg")}
        />
      ];
    }
    // END OF FRUIT //

    // FISH //
    if (disease === "Fatty Liver Disease" && food === "Fish") {
      return [
        <DietCard
          text="Bangus: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/bangus.jpg")}
        />,
        <DietCard
          text="Tamban: 2 pieces. 35 grams"
          image={require("../../../../../assets/suggestions/tamban.jpg")}
        />,
        <DietCard
          text="Tilapia: 2pcs. 35 grams"
          image={require("../../../../../assets/suggestions/tilapia.jpg")}
        />
      ];
    }

    if (disease === "Arthritis" && food === "Fish") {
      return [
        <DietCard
          text="Bangus: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/bangus.jpg")}
        />,
        <DietCard
          text="Lapu-lapu: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/lapu_lapu.jpg")}
        />,
        <DietCard
          text="Dalagang Bukid: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/dalagang_bukid.jpg")}
        />
      ];
    }

    if (disease === "Cardiovascular Disease" && food === "Fish") {
      return [
        <DietCard
          text="Bangus: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/bangus.jpg")}
        />,
        <DietCard
          text="Tamban: 2 pcs. 35 grams"
          image={require("../../../../../assets/suggestions/tamban.jpg")}
        />,
        <DietCard
          text="Dalagang Bukid: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/dalagang_bukid.jpg")}
        />
      ];
    }

    if (disease === "Type 2 Diabetes" && food === "Fish") {
      return [
        <DietCard
          text="Lapu-lapu: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/lapu_lapu.jpg")}
        />,
        <DietCard
          text="Dalagang Bukid: 1 slice 35 grams"
          image={require("../../../../../assets/suggestions/dalagang_bukid.jpg")}
        />,
        <DietCard
          text="Tamban: 2 pcs. 35 grams"
          image={require("../../../../../assets/suggestions/tamban.jpg")}
        />
      ];
    }

    if (disease === "Hypertension" && food === "Fish") {
      return [
        <DietCard
          text="Lapu-lapu: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/lapu_lapu.jpg")}
        />,
        <DietCard
          text="Dalagang Bukid: 1 slice. 35 grams"
          image={require("../../../../../assets/suggestions/dalagang_bukid.jpg")}
        />,
        <DietCard
          text="Tamban: 2pcs. 35 grams"
          image={require("../../../../../assets/suggestions/tamban.jpg")}
        />
      ];
    }
    // END OF FISH //

    // MEAT //
    if (disease === "Fatty Liver Disease" && food === "Meat") {
      return [
        <DietCard
          text="Beef Lean Meat: 1 slice. 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_lean_meat.jpg")}
        />,
        <DietCard
          text="Chicken Leg: 1 small leg. 30 grams"
          image={require("../../../../../assets/suggestions/chicken_leg.jpg")}
        />,
        <DietCard
          text="Chicken Breast: 1/4 breast. 30 grams"
          image={require("../../../../../assets/suggestions/chicken_breast.jpg")}
        />
      ];
    }

    if (disease === "Arthritis" && food === "Meat") {
      return [
        <DietCard
          text="Chicken Leg: 1 small leg. 30 grams"
          image={require("../../../../../assets/suggestions/chicken_leg.jpg")}
        />,
        <DietCard
          text="Chicken Breast: 1/4 breast. 30 grams"
          image={require("../../../../../assets/suggestions/chicken_breast.jpg")}
        />,
        <DietCard
          text="Beef Sirloin: 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_sirloin.jpg")}
        />
      ];
    }

    if (disease === "Cardiovascular Disease" && food === "Meat") {
      return [
        <DietCard
          text="Beef Lean Meat: 1 slice. 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_lean_meat.jpg")}
        />,
        <DietCard
          text="Beef Sirloin: 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_sirloin.jpg")}
        />,
        <DietCard
          text="Beef Brisket: 1 slice (small match box). 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_brisket.jpg")}
        />
      ];
    }

    if (disease === "Type 2 Diabetes" && food === "Meat") {
      return [
        <DietCard
          text="Chicken Wings: 1pc (med). 25 grams"
          image={require("../../../../../assets/suggestions/chicken_wings.jpg")}
        />,
        <DietCard
          text="Beef Brisket: 1 slice (small match box). 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_brisket.jpg")}
        />,
        <DietCard
          text="Beef Round: 1 slice. 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_round.jpg")}
        />
      ];
    }

    if (disease === "Hypertension" && food === "Meat") {
      return [
        <DietCard
          text="Beef Lean Meat: 1 slice. 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_lean_meat.jpg")}
        />,
        <DietCard
          text="Chicken Wings: 1 pc (med). 25 grams"
          image={require("../../../../../assets/suggestions/chicken_wings.jpg")}
        />,
        <DietCard
          text="Beef Round: 1 slice. 2x week 30 grams"
          image={require("../../../../../assets/suggestions/beef_round.jpg")}
        />
      ];
    }
    // END OF MEAT //

    return null;

  }
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        {this.renderSuggestion()}
      </ScrollView>
    )
  }
}

export default Suggestion;
