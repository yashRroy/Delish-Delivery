import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const cartItems = [1, 1, 1, 1];
const addresses = [1, 1, 1];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 24,
  p: 4,
};
const initialValues={
  streetAddress:"",
  state:"",
  pincode:"",
  city:""
}
const validationSchema=Yup.object().shape({
  streetAddress:Yup.string().required("Street Adddress is required"),
  state:Yup.string().required("State is Required"),
  city:Yup.string().required("City is required"),
  pincode:Yup.number().required("pincode is required")
})
const Cart = () => {
  const [openAddressModal,setOpenAddressModal]=useState()
  const createOrderUsingSelectedAddress=()=>{
      console.log("create order")
  }
  const handleOpenAddressModel=()=>{
       setOpenAddressModal(true)
       console.log("handle  open address model")
  }
  const handleSubmit=(values)=>{
   console.log("handle submit",values)
  }
  const handleCloseAddressModal=()=>{
   setOpenAddressModal(false)
  }
  
  return (
    <Fragment>
      <main className="lg:flex juustify-between">
        <section className="lg:w-[30%] space-y-6 min-h-screen pt-10">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem />
            ))}
          </div>
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extraLight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹321</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>₹11</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹33</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>₹386</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] px-5">
          <h1 className="text-center font-semibold text-2xl py-10">
            Choose Delivery Address
          </h1>
          <div className="flex flex-wrap justify-between">
            {addresses.map((item) => (
              <AddressCard
                showButton={true}
                item={item}
                handleSelecteAddress={createOrderUsingSelectedAddress}
              />
            ))}
            <Card className="flex space-x-5 lg:w-64 m-5 p-5">
              <AddLocationAltIcon/>
      <div className="space-y-3 text-gray-500">
        <p>
          Add New Address
        </p>
        <Button onClick={handleOpenAddressModel} fullWidth variant="contained" sx={{padding:".75rem"}}>Add</Button>
      </div>
    </Card>
          </div>
        </section>
      </main>
      <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
              <Box sx={style}>
                <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Field 
                        label="Street Address"
                        fullWidth
                        variant="outlined"
                        error={!ErrorMessage("streetAddress")}
                        name="streetAdress" as={TextField}
                        helperText={
                          <ErrorMessage name="streetAddress">
                              {(msg)=><span className="text-red-600">{msg}</span>}
                          </ErrorMessage>
                        }/>
                      </Grid>
                      <Grid item xs={6}>
                        <Field 
                        label="State"
                        fullWidth
                        variant="outlined"
                        error={!ErrorMessage("state")}
                        name="state" as={TextField}
                        helperText={
                          <ErrorMessage name="state">
                              {(msg)=><span className="text-red-600">{msg}</span>}
                          </ErrorMessage>
                        }/>
                      </Grid>
                      <Grid item xs={6}>
                        <Field 
                        label="Pincode"
                        fullWidth
                        variant="outlined"
                        error={!ErrorMessage("Pincode")}
                        name="Pincode" as={TextField}
                        helperText={
                          <ErrorMessage name="Pincode">
                              {(msg)=><span className="text-red-600">{msg}</span>}
                          </ErrorMessage>
                        }/>
                      </Grid>
                      <Grid item xs={12}>
                        <Field 
                        label="City"
                        fullWidth
                        variant="outlined"
                        error={!ErrorMessage("City")}
                        name="City" as={TextField}
                        helperText={
                          <ErrorMessage name="City">
                              {(msg)=><span className="text-red-600">{msg}</span>}
                          </ErrorMessage>
                        }/>
                      </Grid>
                      <Grid className="mt-5 ml-5" xs={12}>
                        <Button type="Submit"  variant="contained"> Deliver here</Button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </Box>
      </Modal>
    </Fragment>
  );
};
export default Cart;