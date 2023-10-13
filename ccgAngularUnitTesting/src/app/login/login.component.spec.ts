import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { UserService } from './user.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [UserService],
            imports: [HttpClientTestingModule] // Import HttpClientTestingModule
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
    });

    afterEach(() => {
        httpMock.verify(); // Verify that there are no outstanding requests
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have username empty', () => {
        expect(component.username).toEqual('');
    });

    it('should have password empty', () => {
        expect(component.password).toEqual('');
    });

    it('should have errorMessage empty', () => {
        expect(component.errorMessage).toEqual('');
    });

    it('should have login function', () => {
        expect(component.login).toBeTruthy();
    });

    it('should have login function', () => {
        expect(component.login).toBeTruthy();
    });

    it('should have login function', () => {
        expect(component.login).toBeTruthy();
    });



    it('if username field is entered and login should error message', () => {
        component.username = 'test';
        component.password = 'password';
        component.login();

        const req = httpMock.expectOne('https://example.com/api/login'); // Expect a request to /api/login
        expect(req.request.method).toEqual('POST'); // Expect a POST request
        expect(req.request.body).toEqual({ username: 'test', password: 'password' }); // Expect the request body to match the entered username and password

        req.flush({ message: 'user create' }); // Respond with an error message

        expect(component.errorMessage).toEqual(''); // Expect the error message to be set
    });

    // it('if password field is entered and login should error message', () => {
    //     component.username = 'username';
    //     component.password = 'test';
    //     component.login();

    //     const req = httpMock.expectOne('/api/login'); // Expect a request to /api/login
    //     expect(req.request.method).toEqual('POST'); // Expect a POST request
    //     expect(req.request.body).toEqual({ username: 'username', password: 'test' }); // Expect the request body to match the entered username and password

    //     req.flush({ error: 'Username and password are required.' }); // Respond with an error message

    //     expect(component.errorMessage).toEqual('Username and password are required.'); // Expect the error message to be set
    // });

    // it('if username and password field is entered and login should error message', () => {
    //     component.username = 'username';
    //     component.password = 'password';
    //     component.login();

    //     const req = httpMock.expectOne('/api/login'); // Expect a request to /api/login
    //     expect(req.request.method).toEqual('POST'); // Expect a POST request
    //     expect(req.request.body).toEqual({ username: 'username', password: 'password' }); // Expect the request body to match the entered username and password

    //     req.flush({}); // Respond with an empty object

    //     expect(component.errorMessage).toEqual(''); // Expect the error message to be empty
    // });
});

    


