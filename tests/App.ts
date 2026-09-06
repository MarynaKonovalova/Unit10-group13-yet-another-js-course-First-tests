import { Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';
import { CheckoutSignInPage } from './pages/CheckoutSignInPage';
import { BillingAddressPage } from './pages/BillingAddressPage';
import { PaymentPage } from './pages/PaymentPage';

export class App {
    readonly homePage: HomePage;
    readonly productPage: ProductPage;
    readonly cartPage: CartPage;
    readonly loginPage: LoginPage;
    readonly accountPage: AccountPage;
    readonly checkoutSignInPage: CheckoutSignInPage;
    readonly billingAddressPage: BillingAddressPage;
    readonly paymentPage: PaymentPage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.loginPage = new LoginPage(page);
        this.accountPage = new AccountPage(page);
        this.checkoutSignInPage = new CheckoutSignInPage(page);
        this.billingAddressPage = new BillingAddressPage(page);
        this.paymentPage = new PaymentPage(page);
    }
}
