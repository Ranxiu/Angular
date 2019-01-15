import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ListDetailComponent }  from './list-detail/list-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { GraphQLModule } from './graphql.module';
import { ApolloComponent } from './apollo/apollo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    GraphQLModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    ListDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ApolloComponent,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "https://eu1.prisma.sh/it_ranjianghua163com/prisma/dev"
        })
      }
    },
    deps: [HttpLink]
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }