import TabForm from "./components/TabForm";
import "./styles.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Setting from "./components/Setting";
import { FormProvider } from "./formContext";

export default function App() {
  const Tabs = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interest",
      Component: Interest,
    },
    {
      name: "Setting",
      Component: Setting,
    },
  ];
  return (
    <div className="App">
      <FormProvider>
        <TabForm tabs={Tabs} />
      </FormProvider>
    </div>
  );
}
