/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line prettier/prettier
import { Cart, Checkout, DetailedProduct, Navbar, NewArrival, Recommended, Tabs, TopSelling } from './components';
import Category from './components/Category/Category';
import ExchangePolicy from './components/FooterPages/ExchangePolicy';
import Experience from './components/FooterPages/Experience';
import HowToOrder from './components/FooterPages/HowToOrder';
import OrderTracking from './components/FooterPages/OrderTracking';
import PrivacyPolicy from './components/FooterPages/PrivacyPolicy';
import ProceduresOfRefund from './components/FooterPages/ProceduresOfRefund';
import TermsAndConditions from './components/FooterPages/TermsAndConditions';
import WarrantyAndRefundPolicy from './components/FooterPages/WarrantyAndRefundPolicy';
import { commerce } from './components/lib/commerce';
import SearchedProducts from './components/SearchedProducts/SearchedProducts';
import { FooterContainer } from './containers/footer';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [mobilesTabProducts, setMobilesTabProducts] = useState([]);
    const [newArrivalProducts, setNewArrivalProducts] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [selectItem, setSelectItem] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [cat, setCat] = useState('');
    const [catFetchCheck, setCatFetchCheck] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sNotFound, setSNotFound] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [sFilterResults, setSFilterResults] = useState([]);
    const [sRangeTerm, setSRangeTerm] = useState([0, 200000]);
    const [sRangeCheck, setSRangeCheck] = useState(false);
    const [sSortValue, setSSortValue] = useState('');
    const [notFound, setNotFound] = useState(false);
    const [filterTerm, setFilterTerm] = useState('');
    const [filterResults, setFilterResults] = useState([]);
    const [rangeTerm, setRangeTerm] = useState([0, 200000]);
    const [rangeCheck, setRangeCheck] = useState(false);
    const [sortValue, setSortValue] = useState('');
    const [checkValue, setCheckValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [tLoading, setTLoading] = useState(false);
    const [nLoading, setNLoading] = useState(false);
    const [rLoading, setRLoading] = useState(false);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({
            limit: 200,
        });

        setProducts(data);
        /* console.log('all products', data); */
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity });
        setCart(response.cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId);
        setCart(response.cart);
    };
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    };
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    };
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };
    const handleProductDetails = async (productId) => {
        const { data } = await commerce.products.list({
            query: productId,
        });

        /* console.log(data[0]); */
        setSelectItem(data[0]);
    };
    const fetchProductByCategory = async (slug) => {
        /* console.log(`Slug in App js: ${slug} `); */
        setCat(slug);
        const { data } = await commerce.products.list({
            category_slug: [slug],
            limit: 200,
        });
        setCategoryProducts(data);
        /* console.log(data); */
        setCatFetchCheck(true);
    };
    const fetchMobilesTabProducts = async (slug = 'mobiles-tab') => {
        /* console.log(`Slug in App js: ${slug} `); */
        setLoading(false);
        setCat(slug);
        const { data } = await commerce.products.list({
            category_slug: [slug],
        });
        setMobilesTabProducts(data);
        setLoading(true);
        /* console.log(data); */
    };
    const fetchNewArrivalProducts = async (slug = 'new-arrival') => {
        /* console.log(`Slug in App js: ${slug} `); */
        setNLoading(false);
        const { data } = await commerce.products.list({
            category_slug: [slug],
        });
        setNewArrivalProducts(data);
        /* console.log(data); */
        setNLoading(true);
    };
    const fetchTopSellingProducts = async (slug = 'top-selling') => {
        /*  console.log(`Slug in App js: ${slug} `); */
        setTLoading(false);
        const { data } = await commerce.products.list({
            category_slug: [slug],
        });
        setTopSellingProducts(data);
        /* console.log(data); */
        setTLoading(true);
    };

    const fetchRecommendedProducts = async (slug = 'recommended') => {
        /* console.log(`Slug in App js: ${slug} `); */
        setRLoading(false);
        const { data } = await commerce.products.list({
            category_slug: [slug],
        });
        setRecommendedProducts(data);
        /* console.log(data); */
        setRLoading(true);
    };

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        /*  console.log('search term', searchTerm); */
        if (searchTerm !== '') {
            const newProductList = products.filter((product) =>
                Object.values(product).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
            );
            /* console.log('new Search products in App.js', newProductList); */
            if (newProductList.length > 0) {
                setSNotFound(false);
                setSearchResults(newProductList);
            } else {
                setSNotFound(true);
            }
        } else {
            setSearchResults(products);
        }
    };

    const searchPageRangeHandler = (sRangeTerm) => {
        setSRangeTerm(sRangeTerm);
        /*  console.log('range term', sRangeTerm); */
        if (searchTerm !== '') {
            if (sRangeTerm[0] > 0 || sRangeTerm[1] < 200000) {
                setSRangeCheck(true);
                const newProductList = searchResults.filter((product) =>
                    _.inRange(product.price.raw, sRangeTerm[0], sRangeTerm[1])
                );
                /* console.log('condition checked', newProductList); */

                if (newProductList.length > 0) {
                    setSNotFound(false);
                    setSFilterResults(newProductList);
                } else {
                    setSNotFound(true);
                }
            } else {
                setSearchResults(searchResults);
            }
        } else if (searchTerm === '') {
            if (sRangeTerm[0] > 0 || sRangeTerm[1] < 200000) {
                setSRangeCheck(true);
                const newProductList = products.filter((product) =>
                    _.inRange(product.price.raw, sRangeTerm[0], sRangeTerm[1])
                );
                /*  console.log('condition checked', newProductList);
                 */
                if (newProductList.length > 0) {
                    setSNotFound(false);
                    setSFilterResults(newProductList);
                } else {
                    setSNotFound(true);
                }
            } else {
                setProducts(products);
            }
        }
    };

    const filterHandler = (term, uncheck = '') => {
        /* console.log('Before check value:', checkValue); */
        setFilterTerm(term);
        /*  console.log('filter term', term); */
        setCatFetchCheck(false);
        if (rangeCheck) {
            if (term !== '') {
                setRangeCheck(false);
                setCheckValue(checkValue + 1);
                const newProductList = categoryProducts.filter((product) =>
                    product.name.toLowerCase().includes(term.toLowerCase())
                );
                /* console.log('new filter products in App.js', newProductList); */
                if (newProductList.length > 0) {
                    setNotFound(false);
                    setFilterResults(newProductList);
                } else {
                    setNotFound(true);
                }
            } else {
                setRangeCheck(false);
                setFilterResults(filterResults);
            }
        } else if (rangeCheck === false) {
            if (term !== '') {
                setCheckValue(checkValue + 1);
                if (checkValue > 0) {
                    const newProductList = categoryProducts.filter((product) =>
                        product.name.toLowerCase().includes(term.toLowerCase())
                    );
                    /*  console.log('new filter products in App.js', newProductList); */
                    setFilterResults([...filterResults, ...newProductList]);
                } else {
                    const newProductList = categoryProducts.filter((product) =>
                        product.name.toLowerCase().includes(term.toLowerCase())
                    );
                    /*  console.log('new filter products in App.js', newProductList); */
                    if (newProductList.length > 0) {
                        setNotFound(false);
                        setFilterResults(newProductList);
                    } else {
                        setNotFound(true);
                    }
                }
            } else {
                setCheckValue(checkValue - 1);
                if (checkValue > 1) {
                    /*  console.log('condition Checked', uncheck); */
                    const newProductList = filterResults.filter(
                        (product) => !product.name.toLowerCase().includes(uncheck.toLowerCase())
                    );
                    /*   console.log('new filter products in App.js', newProductList); */
                    if (newProductList.length > 0) {
                        setNotFound(false);
                        setFilterResults(newProductList);
                    } else {
                        setNotFound(true);
                    }
                } else {
                    setFilterResults(categoryProducts);
                }
            }
        }
        /* console.log('After check value:', checkValue); */
    };

    const rangeHandler = (rangeTerm) => {
        setRangeTerm(rangeTerm);
        setCatFetchCheck(false);
        /* console.log('range term', rangeTerm); */

        if (filterTerm !== '') {
            if (rangeTerm[0] > 0 || rangeTerm[1] < 200000) {
                setRangeCheck(true);
                const newProductList = categoryProducts.filter((product) =>
                    _.inRange(product.price.raw, rangeTerm[0], rangeTerm[1])
                );
                /*  console.log('condition checked', newProductList); */

                if (newProductList.length > 0) {
                    setNotFound(false);
                    setFilterResults(newProductList);
                } else {
                    setNotFound(true);
                }
            } else {
                setFilterResults(categoryProducts);
            }
        } else if (filterTerm === '') {
            if (rangeTerm[0] > 0 || rangeTerm[1] < 200000) {
                setRangeCheck(true);
                const newProductList = categoryProducts.filter((product) =>
                    _.inRange(product.price.raw, rangeTerm[0], rangeTerm[1])
                );
                /*   console.log('condition checked', newProductList); */

                if (newProductList.length > 0) {
                    setNotFound(false);
                    setFilterResults(newProductList);
                } else {
                    setNotFound(true);
                }
            } else {
                setFilterResults(categoryProducts);
            }
        }
    };

    const handleSort = (sortValue) => {
        setSortValue(sortValue);
        /* console.log(sortValue); */

        if (filterTerm !== '' && (rangeCheck || rangeCheck === false)) {
            if (sortValue === 10) {
                filterResults.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
            } else if (sortValue === 20) {
                filterResults.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
            } else if (sortValue === 40) {
                filterResults.sort((a, b) =>
                    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
                );
            } else {
                filterResults.sort((a, b) =>
                    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                );
            }
        } else if (filterTerm === '' && rangeCheck) {
            if (sortValue === 10) {
                filterResults.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
            } else if (sortValue === 20) {
                filterResults.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
            } else if (sortValue === 40) {
                filterResults.sort((a, b) =>
                    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
                );
            } else {
                filterResults.sort((a, b) =>
                    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                );
            }
        } else if (filterTerm === '' && rangeCheck === false) {
            if (sortValue === 10) {
                categoryProducts.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
            } else if (sortValue === 20) {
                categoryProducts.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
            } else if (sortValue === 40) {
                categoryProducts.sort((a, b) =>
                    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
                );
            } else {
                categoryProducts.sort((a, b) =>
                    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                );
            }
        }
    };

    const sHandleSort = (sSortValue) => {
        setSSortValue(sSortValue);
        console.log('Sort Value in App.js', sSortValue);
        if (searchTerm !== '') {
            if (sSortValue === 10) {
                searchResults.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
            } else if (sSortValue === 20) {
                searchResults.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
            } else if (sSortValue === 40) {
                searchResults.sort((a, b) =>
                    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
                );
            } else {
                searchResults.sort((a, b) =>
                    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                );
            }
        } else if (searchTerm === '') {
            if (sSortValue === 10) {
                products.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));
            } else if (sSortValue === 20) {
                products.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
            } else if (sSortValue === 40) {
                products.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
            } else {
                products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
            }
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchProductByCategory();
        fetchMobilesTabProducts();
        fetchNewArrivalProducts();
        fetchTopSellingProducts();
        fetchRecommendedProducts();
        fetchCart();
        handleProductDetails();
    }, []);

    /* console.log('Range Check:', rangeCheck); */
    return (
        <Router>
            <div className="App">
                <Navbar
                    totalItems={cart.total_items}
                    fetchProductByCategory={fetchProductByCategory}
                    term={searchTerm}
                    searchKeyword={searchHandler}
                />
                <Switch>
                    <Route exact path="/">
                        <Tabs
                            products={mobilesTabProducts}
                            fetchMobilesTabProducts={fetchMobilesTabProducts}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            loading={loading}
                        />
                        <NewArrival
                            products={newArrivalProducts}
                            fetchNewArrivalProducts={fetchNewArrivalProducts}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            loading={nLoading}
                        />
                        <TopSelling
                            products={topSellingProducts}
                            fetchTopSellingProducts={fetchTopSellingProducts}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            loading={tLoading}
                        />
                        <Recommended
                            products={recommendedProducts}
                            fetchRecommendedProducts={fetchRecommendedProducts}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            loading={rLoading}
                        />
                    </Route>
                    <Route exact path="/category">
                        <Category
                            products={
                                catFetchCheck
                                    ? categoryProducts
                                    : rangeCheck
                                    ? filterResults
                                    : filterTerm.length > 1
                                    ? filterResults
                                    : checkValue > 0
                                    ? filterResults
                                    : categoryProducts
                            }
                            fetchProductByCategory={fetchProductByCategory}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            cat={cat}
                            filterHandler={filterHandler}
                            term={rangeTerm}
                            rangeKeyword={rangeHandler}
                            sortValue={sortValue}
                            sortKey={handleSort}
                            notFound={notFound}
                        />
                    </Route>
                    <Route exact path="/searchedProduct">
                        <SearchedProducts
                            products={
                                searchTerm.length > 1
                                    ? sRangeCheck
                                        ? sFilterResults
                                        : searchResults
                                    : sRangeCheck
                                    ? sFilterResults
                                    : products
                            }
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                            searchTerm={searchTerm}
                            sTerm={sRangeTerm}
                            sRangeKeyword={searchPageRangeHandler}
                            sSortValue={sSortValue}
                            sSortKey={sHandleSort}
                            sNotFound={sNotFound}
                        />
                    </Route>
                    <Route exact path="/detailedProduct">
                        <DetailedProduct
                            item={selectItem}
                            onAddToCart={handleAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            error={errorMessage}
                            onCaptureCheckout={handleCaptureCheckout}
                        />
                    </Route>
                    <Route exact path="/your-experience">
                        <Experience />
                    </Route>
                    <Route exact path="/privacy-policy">
                        <PrivacyPolicy />
                    </Route>
                    <Route exact path="/order-tracking">
                        <OrderTracking />
                    </Route>
                    <Route exact path="/delivery-terms-and-conditions">
                        <TermsAndConditions />
                    </Route>
                    <Route exact path="/how-to-order">
                        <HowToOrder />
                    </Route>
                    <Route exact path="/warranty-and-refund-policy">
                        <WarrantyAndRefundPolicy />
                    </Route>
                    <Route exact path="/procedures-of-refund">
                        <ProceduresOfRefund />
                    </Route>
                    <Route exact path="/exchange-policy">
                        <ExchangePolicy />
                    </Route>
                </Switch>
                <FooterContainer />
            </div>
        </Router>
    );
}

export default App;
