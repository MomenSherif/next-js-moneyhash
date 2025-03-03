'use client';
import { useEffect } from 'react';
import { moneyHash } from './utils/moneyhash';

export default function Home() {
  useEffect(() => {
    const elements = moneyHash.elements({
      styles: {
        color: 'white', // color of the text
        backgroundColor: 'grey', // background color of the input
        placeholderColor: '#ccc', // placeholder color
      },
    });

    const cardHolderName = elements.create({
      elementType: 'cardHolderName',
      elementOptions: {
        selector: '#card-holder-name',
        // height: "80px",
        placeholder: 'Card Holder Name',
        styles: {
          // color: "red",
          // backgroundColor: "black", // background color of the input
          // placeholderColor: "#ccc", // placeholder color
        },
      },
    });

    const cardNumber = elements.create({
      elementType: 'cardNumber',
      elementOptions: {
        selector: '#card-number',
        styles: {
          // color: "red",
        },
      },
    });

    const cardCvv = elements.create({
      elementType: 'cardCvv',
      elementOptions: {
        selector: '#card-cvv',
        styles: {
          // color: "blue",
        },
      },
    });

    const cardExpiryMonth = elements.create({
      elementType: 'cardExpiryMonth',
      elementOptions: {
        selector: '#card-expiry-month',
        styles: {
          // color: "green",
        },
      },
    });

    const cardExpiryYear = elements.create({
      elementType: 'cardExpiryYear',
      elementOptions: {
        selector: '#card-expiry-year',
        styles: {},
      },
    });

    async function init() {
      cardHolderName.mount();
      cardNumber.mount();
      cardCvv.mount();
      cardExpiryMonth.mount();
      cardExpiryYear.mount();
    }
    init();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div id="card-holder-name"></div>
      <div id="card-number"></div>
      <div id="card-expiry-month"></div>
      <div id="card-expiry-year"></div>
      <div id="card-cvv"></div>

      <button
        onClick={async () => {
          try {
            const cardData = await moneyHash.cardForm.collect();
            console.log({ cardData });
          } catch (error) {
            console.dir(error);
          }
        }}
      >
        Collect
      </button>
    </div>
  );
}
