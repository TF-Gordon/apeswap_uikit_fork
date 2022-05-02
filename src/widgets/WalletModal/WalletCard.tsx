import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      sx={{
        justifyContent: "space-between",
        border: "0px",
        background: "white4",
        fontSize: "16px",
        height: "44px",
        boxShadow: "none",
        lineHeight: 1,
        letterSpacing: "0.03em",
        padding: "0px 24px",
        opacity: 1,
        "&:hover": {},
      }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text sx={{ lineHeight: 1.5 }} size="16px" weight={600} color="text" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
