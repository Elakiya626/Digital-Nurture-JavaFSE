function CurrencyConvertor() {

  const handleSubmit = () => {

    const rupees = 1000;
    const euro = (rupees / 90).toFixed(2);

    alert(`₹${rupees} = €${euro}`);
  };

  return (
    <div>

      <h2>Currency Convertor</h2>

      <button onClick={handleSubmit}>
        Convert
      </button>

    </div>
  );
}

export default CurrencyConvertor;