import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import { Modal } from "antd";
import DashSidebar from "../Dashboardf/DashSidebar";
import { Container, Grid } from "@mui/material";
import './category.css'
import '../Product/product.css'


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories,"hello from agiain create category")
  const [name, setName] = useState("");

  // for modal to popup
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);

  // for modal to edit name
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8020/createcategory", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8020/getcategory");
      console.log(res)
      if (res.data.success) {
        setCategories(res.data.category);
        console.log(" from create category",res)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`http://localhost:8020/updatecategory/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8020/deletecategory/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
  <>
   
        <Toaster/>
        <Grid container>
          <Grid xs={3}>
           <DashSidebar/>
          </Grid>
          <Grid  xs={9}>
          <h1 className='h1--header'>Category List</h1>
            <div className="createcategory--table">
           
            <div >
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div >
              <table >
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="savechanges--btn"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="button--delete"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
            </div>
          </Grid>
        </Grid>
        </>
   
   
  );
};

export default CreateCategory;