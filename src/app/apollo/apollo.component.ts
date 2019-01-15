import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.less']
})
export class ApolloComponent implements OnInit {
  users: any;
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo
    ) { }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          users{
              id
              name
              posts{
                id
                title
              }
            }
        }
      `,
    })
    .valueChanges.subscribe(result => {
      this.users = result.data;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }

}
