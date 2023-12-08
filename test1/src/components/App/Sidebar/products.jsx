import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";

function Product() {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then(api => {
            setdata(api.data.products)
        })
    },[])
    return (
        <>
        <Grid w={'100%'} templateColumns='repeat(4, 1fr)' gap={5}>
            {
                data.slice(0,4).map(el => {
                    return (
                        <Box position={'relative'} transition='all 0.3s ease'  _hover={{border:"none",boxShadow:'0px 0px 5px 5px #f2f2f2',transition:'all 0.3s ease'}} w={'100%'} height={'400px'}  bg={'white'} border={'2px solid #f2f2f2'} borderRadius={'8px'} >
                            
                        <Image mb={"3%"} borderRadius={'8px'} key={el.id} src={el.thumbnail} alt="error in image" w='100%' h='100%' objectFit='cover' maxH='300px' />
                        <Box  p={'1% 5%'}>
                            <Text fontSize={'18px'} fontWeight={'400'} key={el.id}>{el.title}</Text>
                            <Box  alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
                                <Heading fontSize={'22px'} key={el.id}>{el.price} Som</Heading>
                                <Button variant={'outline'} colorScheme="purple" _hover={{variant:'solid',bg:'#5946de',color:"white"}}><FiShoppingCart/></Button>
                            </Box>
            </Box>
                        </Box>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default Product