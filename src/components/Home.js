import { useState, useEffect } from "react";
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"

import {
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import './Home.css'

export const Home = () => {

    const [jela, setJela] = useState([]);
    const jelaDBRef = collection(db, 'collection-name')

    const [pica, setPica] = useState([]);
    const picaDBRef = collection(db, 'collection-pica')

    const [porudzbine, setPorudzbine] = useState([]);

    const totalPrice = porudzbine.reduce(
        (total, porudzbina) => total + porudzbina.kolicina * porudzbina.cena, 0);


    const remove = (izabrano) => {
        const postoji = porudzbine.find((x) => x.id === izabrano.id)
        if (postoji) {
            if (postoji.kolicina === 1) {
                setPorudzbine(porudzbine.filter((nadjeno) => nadjeno.id !== izabrano.id))
            } else {
                setPorudzbine(
                    porudzbine.map((porudzbina) =>
                        porudzbina.id === izabrano.id ?
                            { ...postoji, kolicina: postoji.kolicina - 1 } : porudzbina
                    )
                )
            }
        }
    }
    const add = (izabrani_element) => {

        const postoji = porudzbine.find((x) => x.id === izabrani_element.id)
        if (postoji) {
            setPorudzbine(
                porudzbine.map((porudzbina) =>
                    porudzbina.id === izabrani_element.id ? { ...postoji, kolicina: postoji.kolicina + 1 } : porudzbina
                )
            )


        } else {
            setPorudzbine([...porudzbine, { ...izabrani_element, kolicina: 1 }])

        }

    }

    useEffect(() => {
        const getOrders = async () => {
            const data = await getDocs(jelaDBRef);
            console.log(data);
            setJela(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getOrders();


        const getDrinks = async () => {
            const data = await getDocs(picaDBRef);
            console.log(data);
            setPica(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getDrinks();


    }, [])



    return (
        <div className="home">
            <div className="meni">
                <div className="App">
                    {jela.map((jelo) => {
                        return (
                            <div className="foodCard">
                                <div className="cardInfo">
                                    <h1 className="title">{jelo.ime}</h1>
                                    <h4 className="description">{jelo.opis}</h4>
                                    <h4 className="price">{jelo.cena}</h4>
                                    <button onClick={() => add(jelo)} className="btnAdd"> Add to Cart</button>
                                </div>
                                <div className="cardImg">
                                    <img src={jelo.img}></img>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="App">
                    {pica.map((pice) => {
                        return (
                            <div className="foodCard">
                                <div className="cardInfo">
                                    <h1 className="title">{pice.ime}</h1>
                                    <h4 className="description">{pice.opis}</h4>
                                    <h4 className="price">{pice.cena}</h4>
                                    <button onClick={() => add(pice)} className="btnAdd"> Add to Cart</button>
                                </div>
                                <div className="cardImg">
                                    <img src={pice.img}></img>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="korpa">
                <h3>Korpa</h3>
                {
                    porudzbine.map((porudzbina) => {
                        return (
                            <div>
                                <h3> {porudzbina.ime}</h3>
                                <h3> {porudzbina.cena}</h3>
                                <button onClick={() => remove(porudzbina)}> - </button>
                                <h3> {porudzbina.kolicina}</h3>
                                <button onClick={() => add(porudzbina)}> + </button>
                                <h3>{porudzbina.kolicina * porudzbina.cena} RSD</h3>
                            </div>
                        )
                    }
                    )

                }
                <h3> Total cena: {totalPrice} RSD </h3>
                <h3> pdv : {totalPrice * 0.2} RSD</h3>
                <h3> dostava : {totalPrice > 2000 ? 0 : 300} RSD </h3>
            </div>

        </div>
    );


}