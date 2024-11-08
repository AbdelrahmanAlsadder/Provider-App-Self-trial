import { Navigate } from "react-router-dom";

// Dashboard

import Dashboard from "../pages/Dashboard/Index";
import Signin from "../pages/AuthenticationInner/Signin";
import Signup from "../pages/AuthenticationInner/Signup";
import PasswordReset from "../pages/AuthenticationInner/PasswordReset";
import Lockscreen from "../pages/AuthenticationInner/Lockscreen";
import ScrollBar from "../pages/Components/AdvanceUI/Scrollbar/index";
import SwiperSlider from "../pages/Components/AdvanceUI/Swiper/index";
import Ratings from "../pages/Components/AdvanceUI/Ratings/index";
import HightLights from "../pages/Components/AdvanceUI/Highlight/index";
import BasicForm from "../pages/Components/Forms/BasicElements/index";
import FormSelect from "../pages/Components/Forms/FormSelect/index";
import FormCheckboxRadio from "../pages/Components/Forms/Checkbox&radio/index";
import FormPickers from "../pages/Components/Forms/Pickers/index";
import FormInputMask from "../pages/Components/Forms/InputMasks/index";
import FormAdvanced from "../pages/Components/Forms/Advanced/index";
import FormValidation from "../pages/Components/Forms/Validation/index";
import FormWizard from "../pages/Components/Forms/Wizard/index";
import EditorForm from "../pages/Components/Forms/Editors/index";
import FileUpload from "../pages/Components/Forms/FileUpload/index";
import FormLayout from "../pages/Components/Forms/Formslayout/index";
import BasicTables from "../pages/Components/Tables/BasicTable/index";
import ReactTable from "../pages/Components/Tables/ReactTable/index";
import Linechart from "../pages/Components/Apexcharts/LineChart/Index";
import RemixIcons from "../pages/Components/Icons/RemixIcon/Iconremix";
import BootstrapIcon from "../pages/Components/Icons/BootstrapIcon/BootstrapIcon";
import BoxIcons from "../pages/Components/Icons/BoxIcon/BoxIcons";
import MaterialDesign from "../pages/Components/Icons/MaterialdesignIcon/MaterialDesign";
import GoogleMap from "../pages/Components/Maps/GoogleMap/GoogleMap";
import AreaChart from "../pages/Components/Apexcharts/Area/Index";
import ColumnChart from "../pages/Components/Apexcharts/Column/Index";
import BarChart from "../pages/Components/Apexcharts/Bar/Index";
import MixedChart from "../pages/Components/Apexcharts/Mixed/Index";
import TimelineChart from "../pages/Components/Apexcharts/Timeline/Index";
import Candlestick from "../pages/Components/Apexcharts/CandleStick/Index";
import BoxPlot from "../pages/Components/Apexcharts/Boxplot/Index";
import BubbleChart from "../pages/Components/Apexcharts/Bubble/Index";
import ScatterChart from "../pages/Components/Apexcharts/Scatter/Index";
import HeatMap from "../pages/Components/Apexcharts/Heatmap/Index";
import TreemapChart from "../pages/Components/Apexcharts/Treemap/Index";
import PieChart from "../pages/Components/Apexcharts/Pie/Index";
import RadialbarChart from "../pages/Components/Apexcharts/Radialbar/Index";
import RadarChart from "../pages/Components/Apexcharts/Radar/Index";
import PolarChart from "../pages/Components/Apexcharts/PolarArea/Index";
import AddInvoice from "../pages/InvoiceManagement/AddInvoice/index";
import InvoiceDetails from "../pages/InvoiceManagement/InvoiceDetails/index";
import AddProduct from "../pages/InvoiceManagement/AddProduct";
import NewTransaction from "../pages/InvoiceManagement/NewTransaction/index";
import TransactionList from "../pages/InvoiceManagement/TransactionList/index";
import Taxes from "../pages/InvoiceManagement/Taxes/index";
import SalesReport from "../pages/InvoiceManagement/Report/SalesReport/index";
import ExpensesReport from "../pages/InvoiceManagement/Report/ExpensesReport/index";
import Invoice from "../pages/InvoiceManagement/Invoice/index";
import PaymentSummary from "../pages/InvoiceManagement/Report/PaymentSummary";
import Users from "../pages/InvoiceManagement/Users";
import ProductList from "../pages/InvoiceManagement/ProductList";
import Payments from "../pages/InvoiceManagement/Payments";

import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import Register from "../pages/Authentication/Register";
import UserProfile from "../pages/Authentication/UserProfile";


interface RouteObject {
  path: string;
  component: any;
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/index", component: <Dashboard /> },
  { path: "/dashboard", component: <Dashboard /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

  { path: "/invoice", component: <Invoice /> },
  { path: "/invoice-add", component: <AddInvoice /> },
  { path: "/payment-summary", component: <PaymentSummary /> },
  { path: "/invoice-details", component: <InvoiceDetails /> },
  { path: "/product-add", component: <AddProduct /> },
  { path: "/transaction-new", component: <NewTransaction /> },
  { path: "/transaction-list", component: <TransactionList /> },
  { path: "/taxes", component: <Taxes /> },
  { path: "/sale-report", component: <SalesReport /> },
  { path: "/expenses-report", component: <ExpensesReport /> },
  { path: "/user", component: <Users /> },
  { path: "/product-list", component: <ProductList /> },
  { path: "/payments", component: <Payments /> },



    //   Bootstrap UI
    //  Alerts
    

    // Advance UI

    // Scrollbar
    { path: "/advance-ui-scrollbar", component: <ScrollBar /> },

    // Swiper Slider
    { path: "/advance-ui-swiper", component: <SwiperSlider /> },

    // Ratings
    { path: "/advance-ui-ratings", component: <Ratings /> },

    // Highlight
    { path: "/advance-ui-highlight", component: <HightLights /> },

    // Forms

    // Basic Elements
    { path: "/forms-elements", component: <BasicForm /> },

    // Form Select
    { path: "/forms-select", component: <FormSelect /> },

    // Checkboxes & Radios
    { path: "/forms-checkboxs-radios", component: <FormCheckboxRadio /> },

    // Pickers
    { path: "/forms-pickers", component: <FormPickers /> },

    // Input Masks
    { path: "/forms-masks", component: <FormInputMask /> },

    // Advanced
    { path: "/forms-advanced", component: <FormAdvanced /> },

    // { path: "/forms-range-sliders", component: <RangeSliders /> },

    

    // Validation
    { path: "/forms-validation", component: <FormValidation /> },

    // Wizard
    { path: "/forms-wizard", component: <FormWizard /> },

    // Editors
    { path: "/forms-editors", component: <EditorForm /> },

    // File Uploads
    { path: "/forms-file-uploads", component: <FileUpload /> },

    // Form Layouts
    { path: "/forms-layouts", component: <FormLayout /> },

    // Basic Tables
    { path: "/tables-basic", component: <BasicTables /> },

    // React Tables
    { path: "/tables-react", component: <ReactTable /> },

    // Remix Icon
    { path: "/icons-remix", component: <RemixIcons /> },

    // Boxicons Icon
    { path: "/icons-boxicons", component: <BoxIcons /> },

    // Material Design Icon
    { path: "/icons-materialdesign", component: <MaterialDesign /> },

    // Bootstrap Icon
    { path: "/icons-bootstrap", component: <BootstrapIcon /> },

    // Google
    { path: "/maps-google", component: <GoogleMap /> },

    // ApexCharts

    // apex charts
  { path: "/charts-apex-area", component: <AreaChart /> },
  { path: "/charts-apex-bar", component: <BarChart /> },
  { path: "/charts-apex-boxplot", component: <BoxPlot /> },
  { path: "/charts-apex-bubble", component: <BubbleChart /> },
  { path: "/charts-apex-candlestick", component: <Candlestick /> },
  { path: "/charts-apex-column", component: <ColumnChart /> },
  { path: "/charts-apex-heatmap", component: <HeatMap /> },
  { path: "/charts-apex-line", component: <Linechart /> },
  { path: "/charts-apex-mixed", component: <MixedChart /> },
  { path: "/charts-apex-pie", component: <PieChart /> },
  { path: "/charts-apex-polar", component: <PolarChart /> },
  { path: "/charts-apex-radar", component: <RadarChart /> },
  { path: "/charts-apex-radialbar", component: <RadialbarChart /> },
  { path: "/charts-apex-scatter", component: <ScatterChart /> },
  { path: "/charts-apex-timeline", component: <TimelineChart /> },
  { path: "/charts-apex-treemap", component: <TreemapChart /> },

   //  Profile
   { path: "/user-profile", component: <UserProfile/>},

];

const publicRoutes: Array<RouteObject> = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/register", component: <Register /> },
  
  { path: "/auth-signin",  component: <Signin /> },
  { path: "/auth-signup",  component: <Signup /> },
  { path: "/auth-pass-reset",  component: <PasswordReset /> },
  { path: "/auth-lockscreen",  component: <Lockscreen /> },

];

export { authProtectedRoutes, publicRoutes}