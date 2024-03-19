import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import React, { useState } from "react"
import MeanuItemCard from "./MeanuItemCard";

const categories = [
    "Thali",
    "Starters",
    "Indian Main Course",
    "Rice and Biryani",
    "Breads",
    "Chinese",
    "Dessert",
  ];
const foodType = ["vegetarian Only", "Non-Vegetarian Only", "Both"];
const meanu=[1,1,1,1,1,1]
const Restaurant = () => {

    const [selectedCategory,setSelectedCategory]=useState();
    const [selectedFoodType,setSelectedFoodType]=useState();

    const handleFoodTypeChange=()=>{
        console.log("selected Food type - ", selectedFoodType)
    }
    const handleCategoryChange=()=>{
        console.log("selected category - ",selectedCategory);
    }
    return(
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">
                    {`Home/India/Burdera/2/Orderr Online`}
                </h3>
            <div>
                <img
                className='w-full h-[40h] object-cover'
                src="https://b.zmtcdn.com/data/pictures/8/20721868/931f83ec7836faa8d25adf1f0db624d7.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" 
                alt="" />
            </div>
            <div>
                <h1 className="text-4xl py-1 font-semibold">{`Burdera`}</h1>
                <p className="text-gray-500">
                    North Indian, Japanese, Fast Food, Momos, Sushi, Biryani, Beverages
                </p>
                <p className="py-3 text-orange-300">
                    Open now till 12 AM(Today)          
                </p>
            </div>
            </section>
            <Divider/>

            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%]">
                    <Card className="p-5 space-y-5 lg:sticky top-28">
                        <div>
                            <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                                Category
                            </Typography>
                            <FormControl component={"fieldset"}>
                            <RadioGroup name="category" value={selectedCategory} onChange={handleCategoryChange}>
                            {categories.map((item,index)=><FormControlLabel
                            key={index}
                            value={item}
                            control={<Radio/>}
                            label={item}
                            sx={{color:"gray"}}
                            />)}
                            </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                                Food Type
                            </Typography>
                            <FormControl component={"fieldset"}>
                            <RadioGroup name="foodType" value={selectedFoodType} onChange={handleFoodTypeChange}>
                            {foodType.map((item,index)=><FormControlLabel
                            key={index}
                            value={item}
                            control={<Radio/>}
                            label={item}
                            sx={{color:"gray"}}
                            />)}
                            </RadioGroup>
                            </FormControl>
                        </div>
                    </Card>
                </div>
                <div className="lg:w-[80%] space-y-5 lg:pl-10">
                                {meanu.map((item)=><MeanuItemCard item={item}/>)}
                </div>
            </section>
        </div>
    )
}

export default Restaurant;