import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/login.jsx';
import AdminDashboard from './pages/adminDashboard.jsx';
import PrivateRoutes from './utils/privateRoute.jsx';
import RoleBasedRoutes from './utils/roleBasedRoutes.jsx';
import AdminSummary from './components/dashboard/adminSummary.jsx';
import DepartmentList from './components/department/departmentList.jsx';
import AddDepartment from './components/department/addDepartment.jsx';
import EditDepartment from './components/department/editDepartment.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBasedRoutes>
          </PrivateRoutes>  

        }>
          <Route index element={<AdminSummary />}></Route>
          <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>

        </Route>
        <Route path="/employee-dashboard" element={<employeeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
