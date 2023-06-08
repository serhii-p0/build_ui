import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SignInForm {
    username: string;
    password: string;
    rememberMe: boolean;
}

@Injectable()
export abstract class SignInService {

    public abstract loading$(): Observable<boolean>;

    /**
     *
     * @throws
     *  The error with a message key.
     */
    public abstract signIn(form: SignInForm): Observable<SignInForm>;
}
