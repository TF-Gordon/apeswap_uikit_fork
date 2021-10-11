import React from "react";
import networks from "./config";
import { Modal } from "../Modal";
import NetworkCard from "./NetworkCard";
import { SwitchNetwork } from "./types";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
  onDismiss?: () => void;
}

const SelectNetworkModal: React.FC<Props> = ({ onDismiss = () => null, switchNetwork, chainId }) => (
  <Modal title="Select a Network" onDismiss={onDismiss}>
    {networks.map((network) => (
      <NetworkCard networkConfig={network} chainId={chainId} switchNetwork={switchNetwork} onDismiss={onDismiss} />
    ))}
  </Modal>
);

SelectNetworkModal.defaultProps = {
  chainId: 56,
  onDismiss: () => null,
};

export default SelectNetworkModal;
