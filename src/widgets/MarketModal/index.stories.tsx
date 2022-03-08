import React, { useState } from "react";
import { MarketModalProps, MarketModal } from ".";
import { Connected } from "../Menu/index.stories";

export default {
  title: "Widgets/MarketModal",
  component: MarketModal,
  argTypes: {
    onDismiss: { action: "onDismiss" },
    startEarning: { action: "startEarning" },
  },
};

export const ModalWithBackgroundMenu: React.FC<MarketModalProps> = ({
  title = "Welcome to ApeSwap’s Lending Network",
  description = "How does it work?",
  startEarning,
}) => {
  const [visible, setVisible] = useState(true);
  const contents = [<p>body 0</p>, <p>body 1</p>, <p>body 2</p>, <p>body 3</p>];

  return (
    <>
      {visible && (
        <MarketModal
          title={title}
          description={description}
          startEarning={startEarning}
          onDismiss={() => setVisible(false)}
          contents={contents}
        />
      )}
      <Connected />
    </>
  );
};
