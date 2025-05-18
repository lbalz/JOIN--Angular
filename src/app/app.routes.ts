import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { BoardComponent } from './pages/board/board.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HelpComponent } from './pages/help/help.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { MainContentComponent } from './pages/main-content/main-content.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: MainContentComponent,
        children: [
            {path: 'summary', component: SummaryComponent},
            {path: 'add-task', component: AddTaskComponent},
            {path: 'board', component: BoardComponent},
            {path: 'contacts', component: ContactsComponent},
            {path: 'help', component: HelpComponent},
            {path: 'privacy-policy', component: PrivacyPolicyComponent},
            {path: 'legal-notice', component: LegalNoticeComponent}
        ]
    }
];
