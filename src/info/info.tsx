import { useCart } from '../cartContext';

function Info(props: { handleNextPage: any; setName: any;setIsChecked:any, setPhone: any ,isCheked:string}) {
  const { total, cartItems } = useCart() as any;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    props.handleNextPage();
  };

  return (
    <>
      <div className="__className" style={{ zoom: 0.9 }} dir="ltr">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N"></div>{' '}
          <div className="ContentWrapper_container"></div>
        </div>

        <div id="the_cart" className=" " style={{ background: '#000' }}>
          <div className="Popup_popup__1g1zm ">
            <form onSubmit={handleSubmit} id="model_data" method="post">
              <div className="AddressForm_wrapper__xeQ1H">
                <div
                  className="AddressForm_formWrapper__WZq2k"
                  style={{ marginTop: 30 }}
                >
                  <h3
                    className="Typography_h2__Gzo5Y AddressForm_titleMobile__4vv37"
                    style={{ marginBottom: 20 }}
                  >
                    Delivery location
                  </h3>
                  <div className="AddressForm_form__i7dus">
                    <div className="Input_input__eCvQc">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="name"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          onChange={(e) => {
                            props.setName(e.target.value);
                          }}
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          defaultValue=""
                          autoComplete="off"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          name="address"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          placeholder="Address"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_apartment__yHdfK">
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          name="apartment"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="apartmentField"
                          defaultValue=""
                          placeholder="  Apartment/Residential Building"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_phone__pWBEF">
                      <div className="Input_label__cUSvF Input_active__QHdN6 Input_ignoreRtl__mB_4w">
                        Phone Number
                      </div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="phone"
                          className="Input_element__ukgk4"
                          onChange={(e) => {
                            props.setPhone(e.target.value);
                          }}
                          type="tel"
                          style={{
                            border: '1px #f2f2f2 solid',
                            margin: 2,
                            background: '#f2f2f2',
                          }}
                          maxLength={12}
                          defaultValue={+965}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Textarea_input__j1c7L">
                      <div
                        className="Textarea_symbolCounter__goJXS"
                        style={{ display: 'none' }}
                      >
                        <p className="Typography_p9__oo5il Textarea_counter__ou38x">
                          0/200
                        </p>
                      </div>
                      <textarea
                        maxLength={200}
                        style={{
                          border: '1px #f2f2f2 solid',
                          margin: 4,
                          background: '#f2f2f2',
                        }}
                        name="notes"
                        className="Textarea_element__i94ZD AddressForm_textAreaPlaceholder"
                        placeholder="Add delivery instructions for the driver"
                        data-test-id="driverNote"
                        autoComplete="off"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="MarketplaceCardPayment_topContent__K5bEQ"
                style={{ marginTop: '10px' }}
              >
                <h3 className="Typography_h3__HPYxa">Mark a location</h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    textAlign: 'center',
                    margin: 15,
                  }}
                >
                  <div
                    style={{
                      background: 'black',
                      padding: '15px 5px',
                      color: 'white',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./home.png" alt="home" height={20} width={20} />
                    Home
                  </div>
                  <div
                    style={{
                      background: '#f2f2f2',
                      padding: '15px 5px',
                      color: 'black',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./work2.png" alt="home" height={20} width={20} />
                    Work
                  </div>
                  <div
                    style={{
                      background: '#f2f2f2',
                      padding: '15px 5px',
                      color: 'black',
                      borderRadius: 25,
                      display: 'flex',
                      margin: 2,
                      justifyContent: 'space-around',
                    }}
                  >
                    <img src="./loc.png" alt="home" height={20} width={20} />
                    Client
                  </div>
                </div>
              </div>
              <div
                className="MarketplaceCardPayment_topContent__K5bEQ"
                style={{ marginTop: '10px' }}
              >
                <h3 className="Typography_h3__HPYxa">payment method</h3>
                <div
                  data-analytic-label="selectPaymentMethod"
                  data-test-id="choosePayMethodBtn"
                  className="PaymentMethods_paymentMethod__7SC8Y"
                  style={{ background: '#f2f2f2' }}
                >
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_icon__m0OGl"
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/knet.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{ width: 32, height: 32 }}
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p3__dH_h7 PaymentMethods_label__7E6O1">
                    Debit card{' '}
                  </p>
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_rightIcon__Y_bPY"
                    style={{ width: 16, height: 16 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/arrow_right.5c2803a9.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                </div>
                <div className="OrderInfo_wrapper__GCgIK">
                  <div className="OrderSubCartInfo_cart__81olU">
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <h5 className="Typography_h5__MRrA0 OrderSubCartInfo_merchantName__nPjGh">
                        Alwataniah fish cart{' '}
                      </h5>
                      <h5
                        className="Typography_h5__MRrA0 OrderSubCartInfo_price__YrjcP"
                        style={{ display: 'none' }}
                      ></h5>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">
                        Products (<strong>{cartItems.length}</strong>)
                      </p>
                      <p className="Typography_p6__xuxGw">
                        <span>{total}</span> KD
                      </p>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">Delivery fees</p>
                      <p className="Typography_p6__xuxGw">0 KD</p>
                    </div>
                  </div>
                </div>
                <div
                  className="WithAddresses_list__Q3"
                  style={{ marginTop: 15 }}
                >
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    data-radio={1}
                    style={{ background: '#f2f2f2' }}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull1"
                          defaultValue={20}
                          checked={props.isCheked === 'payfull'}
                          name="payFull"
                          type="radio"
                          onClick={() => props.setIsChecked('payfull')}
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull1">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 18, marginBottom: 10, width: 200 }}
                        >
                          Pay the full value of the order
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          Pay the total order value now and pay through K-Net
                          and get free delivery{' '}
                        </p>
                      </div>
                    </label>
                  </div>
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    style={{
                      marginTop: 15,
                      marginBottom: 15,
                      background: '#f2f2f2',
                    }}
                    data-radio={2}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull2"
                          defaultValue="0.5"
                          name="payFull"
                          type="radio"
                          onClick={() => props.setIsChecked('notfull')}
                          checked={props.isCheked === 'notfull'}
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull2">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 17, marginBottom: 10 }}
                        >
                          Pay only 0.5 KD to confirm your order{' '}
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          Deducted from the order value and pay the rest upon
                          receipt with payment of a delivery fee of 1 KD
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="MarketplaceCardPayment_stickyBottomContent__irsnG">
                <div
                  className="VoucherInfo_wrapper__YDPXt"
                  style={{ display: 'none' }}
                >
                  <p className="Typography_p6__xuxGw">قسيمة الخصم</p>
                  <div
                    data-analytic-label="addVoucher"
                    className="VoucherInfo_badge__wLFMy VoucherInfo_add__CQvtJ"
                  >
                    <h3
                      data-test-id="checkout-pay-with-voucher-add"
                      className="Typography_h4__KNXGH"
                    >
                      أضف +
                    </h3>
                  </div>
                </div>
                <div
                  className="PriceInfo_total__fL_R_"
                  style={{ marginTop: 10 }}
                >
                  <h3 className="Typography_h3__HPYxa">Total</h3>
                  <div className="PriceInfo_prices__TmlB4">
                    <h3
                      data-test-id="checkout-pay-with-products-total-price"
                      className="Typography_h3__HPYxa"
                    >
                      {props.isCheked === 'payfull' ? total : 0.5} KD
                    </h3>
                  </div>
                </div>
                <button
                  type="submit"
                  className="Button_button Button_primary Button_wide__XK76o"
                >
                  <span className="Button_content">
                    Proceed payment
                    <p>( {props.isCheked === 'payfull' ? total : 0.5}KD)</p>
                  </span>
                </button>
              </div>
              <div />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
