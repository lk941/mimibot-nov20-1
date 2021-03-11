import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { ContatoDataService } from './contatos/shared/contato-data.service';
import { ContatoService } from './contatos/shared/contato.service';
import { AutomlService } from './contatos1/bully-insight/automl.service';
import { AuthService } from './auth.service';
import { ExcelService } from './child-model/excel-service/excel.service';

import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatPaginatorModule, MatDialog, MatDialogModule, MatSortModule, MatBadgeModule, MatIconModule, MatButtonModule } from '@angular/material';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { QuizComponent } from './quiz/quiz.component';
import { BullyReportComponent } from './bully-report/bully-report.component';
import { BullyDetailsComponent } from './bully-details/bully-details.component';
import { BullyInsightComponent } from './contatos1/bully-insight/bully-insight.component';
import { Edit1Component } from './contatos1/edit1/edit1.component';
import { List1Component } from './contatos1/list1/list1.component';
import { Edit2Component } from './contatos2/edit2/edit2.component';
import { List2Component } from './contatos2/list2/list2.component';
import { Edit3Component } from './contatos3/edit3/edit3.component';
import { List3Component } from './contatos3/list3/list3.component';
import { ScoreDetailsComponent } from './pcrassesment/score-details/score-details.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { TagCloudComponent } from './tag-cloud/tag-cloud.component';

import{ jqxTagCloudComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtagcloud';  
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { UniquePipe } from './pcrassesment/unique.pipe';
import { ParentPortalComponent } from './parent-portal/parent-portal.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { ParentportalsignComponent } from './parentportalsign/parentportalsign.component';
import { ChildReportComponent } from './child-report/child-report.component';
import { ChildInsightComponent } from './child-insight/child-insight.component';
import { List4Component } from './contatos4/list4/list4.component';

import { SelectChildPageComponent } from './select-child-page/select-child-page.component';
import { PpHomeComponent } from './pp-home/pp-home.component';
import { TeachAddChildComponent } from './teach-add-child/teach-add-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogboxComponent } from './Dialogbox/dialogbox/dialogbox.component';
import { TeachParConfirmationComponent } from './confirmation/teach-par-confirmation/teach-par-confirmation.component';
import { TeachnotifComponent } from './teachnotif/teachnotif.component';

import { HobbiesComponent } from './hobbies/hobbies.component';
import { Edit5Component } from './contatos5/edit5/edit5.component';
import { List5Component } from './contatos5/list5/list5.component';
import { HobbiesInsightComponent } from './contatos5/hobbies-insight/hobbies-insight.component';
import { PhqReportComponent } from './phq-report/phq-report.component';
import { Edit9Component } from './contatos9/edit9/edit9.component';
import { List9Component } from './contatos9/list9/list9.component';
import { Edit7Component } from './contatos7/edit7/edit7.component';
import { List7Component } from './contatos7/list7/list7.component';
import { Edit8Component } from './contatos8/edit8/edit8.component';
import { List8Component } from './contatos8/list8/list8.component';
import { PointSystemComponent } from './point-system/point-system.component';
import { PointSystemDetailsComponent } from './point-system-details/point-system-details.component';
import { PointSystemTaskComponent } from './point-system-task/point-system-task.component';
import { PointSystemRewardsComponent } from './point-system-rewards/point-system-rewards.component';
import { PhqComponent } from './phq/phq.component';
import { PhqInsightComponent } from './contatos6/phq-insight/phq-insight.component';
import { Edit6Component } from './contatos6/edit6/edit6.component';
import { List6Component } from './contatos6/list6/list6.component';
import { Edit10Component } from './contatos10/edit10/edit10.component';
import { List10Component } from './contatos10/list10/list10.component';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    NavComponent,
    HomeComponent,
    HomeworkComponent,
    QuizComponent,
    BullyReportComponent,
    BullyDetailsComponent,
    BullyInsightComponent,
    Edit1Component,
    List1Component,
    Edit2Component,
    List2Component,
    Edit3Component,
    List3Component,
    ScoreDetailsComponent,
    ConfirmationDialogComponent,
    TagCloudComponent,
    jqxTagCloudComponent,
    jqxColorPickerComponent,
    jqxDropDownButtonComponent,
    UniquePipe,
    ParentPortalComponent,
    ParentLoginComponent,
    ParentportalsignComponent,
    ChildReportComponent,
    ChildInsightComponent,
    List4Component,
    SelectChildPageComponent,
    PpHomeComponent,
    TeachAddChildComponent,
    DialogboxComponent,
    TeachParConfirmationComponent,
    TeachnotifComponent,
    HobbiesComponent,
    Edit5Component,
    List5Component,
    HobbiesInsightComponent,
    PhqReportComponent,
    Edit9Component,
    List9Component,
    Edit7Component,
    List7Component,
    Edit8Component,
    List8Component,
    PointSystemComponent,
    PointSystemDetailsComponent,
    PointSystemTaskComponent,
    PointSystemRewardsComponent,
    PhqComponent,
    PhqInsightComponent,
    Edit6Component,
    List6Component,
    Edit10Component,
    List10Component,
  ],

  entryComponents: [ConfirmationDialogComponent, DialogboxComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgbModule.forRoot(),
    OAuthModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule, 
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ContatoService,ContatoDataService,ConfirmationDialogService,AutomlService, AuthService, ExcelService, MatDialog,],
  bootstrap: [AppComponent],
  exports: [MatSortModule]
})

export class AppModule { }
