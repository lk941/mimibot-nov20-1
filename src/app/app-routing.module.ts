import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { QuizComponent } from './quiz/quiz.component';
import { BullyReportComponent } from './bully-report/bully-report.component';
import { BullyDetailsComponent} from './bully-details/bully-details.component';
import { ScoreDetailsComponent } from './pcrassesment/score-details/score-details.component';
import { BullyInsightComponent } from './contatos1/bully-insight/bully-insight.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { ParentportalsignComponent } from './parentportalsign/parentportalsign.component';
import { ChildReportComponent } from './child-report/child-report.component';
import { ChildInsightComponent } from './child-insight/child-insight.component';
import { PpHomeComponent } from './pp-home/pp-home.component';
import { TeachnotifComponent } from './teachnotif/teachnotif.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HobbiesInsightComponent } from './contatos5/hobbies-insight/hobbies-insight.component';
import { PhqReportComponent } from './phq-report/phq-report.component';
import { PhqComponent } from './phq/phq.component';
import { PhqInsightComponent } from './contatos6/phq-insight/phq-insight.component';
import { PointSystemComponent } from './point-system/point-system.component';
import { PointSystemDetailsComponent } from './point-system-details/point-system-details.component';
import { PointSystemTaskComponent } from './point-system-task/point-system-task.component';
import { PointSystemRewardsComponent } from './point-system-rewards/point-system-rewards.component';

import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  //Change '' to ParentLoginComponent
  { path: '', component: ParentLoginComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'bully-report', component: BullyReportComponent},
  { path: 'bully-details/:id', component: BullyDetailsComponent},
  { path: 'PCRAReport', component: ScoreDetailsComponent},
  { path: 'bully-insight', component: BullyInsightComponent},
  //Change component: HomeComponent to path: 'phome'
  { path: 'phome', component: HomeComponent},
  { path: 'parentportalsign', component: ParentportalsignComponent},
  { path: 'child-report', component: ChildReportComponent },
  { path: 'child-insight', component: ChildInsightComponent},
  { path: 'phome', component: PpHomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'notifs', component: TeachnotifComponent, canActivate: [AuthenticationGuard] },
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'hobby-insight', component: HobbiesInsightComponent},
  { path: 'phq-report', component: PhqReportComponent},
  { path: 'phq', component: PhqComponent},
  { path: 'phq-insight', component: PhqInsightComponent},
  { path: 'point-system', component: PointSystemComponent},
  { path: 'point-system-task', component: PointSystemTaskComponent},
  { path: 'point-system-rewards', component: PointSystemRewardsComponent},
  { path: 'point-system-details/:id', component: PointSystemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  providers: [AuthenticationGuard],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
