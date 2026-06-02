import { Text, View } from "react-native";
import { OrdersView } from "../../../viewModels/Orders/Orders.view";
import { useOrdersViewModel } from "../../../viewModels/Orders/useOrders.viewModel";

export default function Ordes() {
  const viewModel = useOrdersViewModel();

  return <OrdersView {...viewModel} />;
}
