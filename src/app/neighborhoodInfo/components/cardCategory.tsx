"use client"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardCategory() {
    return (
        <div>
            <div className='flex flex-wrap mt-4 justify-center'>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='' style={{ height: "100%" }}>
                        <Card.Img variant="top" src="/images/category/technology.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>טכנולגיה</h3></Card.Title>
                            <Card.Text>
                                Some quick
                            </Card.Text>
                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card>
                </div>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='h-auto'>
                        <Card.Img variant="top" src="/images/category/food.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>אוכל</h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card></div>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='h-auto'>
                        <Card.Img variant="top" src="/images/category/home.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>נדל"ן</h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card></div>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='h-auto'>
                        <Card.Img variant="top" src="/images/category/game.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>פנאי</h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card></div>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='h-auto'>
                        <Card.Img variant="top" src="/images/category/chair.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>רהיטים</h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card></div>
                <div className='w-1/5  border-2 shadow-inner drop-shadow-lg rounded-lg m-2'>
                    <Card className='h-auto'>
                        <Card.Img variant="top" src="/images/category/beach.jpg" />
                        <Card.Body>
                            <Card.Title><h3 className='font-extrabold'>נופש</h3></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                        <Button className='m-2' variant="primary">Go somewhere</Button>
                    </Card></div>

            </div>
        </div>
    )
}
