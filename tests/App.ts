import { Page } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';

export class App {
    readonly homePage: HomePage;
    readonly productPage: ProductPage;
    readonly cartPage: CartPage;
    readonly loginPage: LoginPage;
    readonly accountPage: AccountPage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.loginPage = new LoginPage(page);
        this.accountPage = new AccountPage(page);
    }
}
