import { Box, Button, Container, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Image/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Header = () => {
    return (
        <Box >
            <Box borderBottom={'2px solid #f2f2f2'} >
                <Container maxW={'1536px'}>
                    {/* Главный бокс Навбара */}
                    <Box display={'flex'} gap={'5%'} justifyContent={'space-between'} py={'1.5%'}>
                        {/* Логотип */}
                        <Box w={'20%'}>
                            <Image src={Logo} />
                        </Box>
                        {/* Поле поиска */}
                        <Box alignItems={'center'} border={'1px solid #DEDEE2'} px={'1%'} borderRadius={'8px'} bg={'#F4F5F7'} display={'flex'} w={'40%'}>
                            <Input color={'#55556D'} variant={'unstyled'} placeholder={'Введите номер запчасти или VIN'} w={'100%'} />
                            <Box cursor={'pointer'} mr={'1%'} color={'#5946D7'}>
                                <IoSearch size={'26px'}/>
                            </Box>
                        </Box>
                        {/* Абоут бокс */}
                        <Box w={'50%'} display={'flex'}>
                            {/* Местоположение(Город) */}
                            <Box w={'33%'} alignItems={'center'} display={'flex'}>
                                <SlLocationPin color='#5946D7' />
                                <Text ml={'5%'}> Санкт-Петербург</Text>
                            </Box>
                            {/* Контакт */}
                            <Box w={'45%'} alignItems={'center'} display={'flex'}>
                                <a href="tel:+998938918811">
                                    <Button variant={'ghost'} colorScheme='purple'>
                                        <LuPhoneCall size={'26px'} color='#5946D7' />
                                        <Text color={'black'} ml={'5%'}>+998-93-891-8811</Text>
                                    </Button>
                                </a>
                            </Box>
                            <Box w={'45%'} alignItems={'center'} display={'flex'}>
                                <FaRegUser size={'18px'} color='#5946D7' />
                                <Button variant={'ghost'} colorScheme='purple'>
                                    <Text color={'black'} ml={'5%'}>Вход</Text>
                                </Button>
                                /
                                <Button variant={'ghost'} colorScheme='purple'>
                                    <Text color={'black'} ml={'1%'}>Регистрация</Text>
                                </Button>



                            </Box>
                        </Box>



                    </Box>
                </Container></Box>
            <Container maxW={'1536px'}>

                {/* Нижний Навбар */}
                <Box gap={'1.5%'} py={'1.5%'} display={'flex'}>
                    <Button colorScheme='purple' display={'flex'} gap={'2%'}>
                        <CgMenuGridO size={'22px'} />
                        <Text>Все категории</Text>
                    </Button>
                    <Button variant={'ghost'}>Пицца</Button>
                    <Button variant={'ghost'}>Суши</Button>
                    <Button variant={'ghost'}>Бургеры</Button>
                    <Button variant={'ghost'}>Снеки</Button>
                    <Button>
                        <PiShoppingCartSimpleBold/>
                        Корзина
                    </Button>
                </Box>

            </Container>
        </Box>
    )
}

export default Header