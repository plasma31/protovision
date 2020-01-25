import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface Event {
  id?: string;
}
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private users: Observable<Event[]>;
  private attended: Observable<any[]>;

  constructor(private afd: AngularFirestore) { }
  // Admin
  setAdmin(id, data) {
    this.afd.collection('Admin/').doc(id).set(data);
  }
  getAdmin() {
    this.users = this.afd.collection('Admin/').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
    return this.users;
  }
  //SetScore
  setScoreDetails(id,data){
    return this.afd.collection('ScoreProtovision').doc(id).set(data);
  }
  addScore(id,data){
    return this.afd.collection('ScoreProtovision').doc(id).update(data);
  }
  getScore(){
    this.users = this.afd.collection('ScoreProtovision').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
    return this.users;
  }
  // ScanCheck
  scan(event,id, data) {
    return this.afd.collection('Attended '+event).doc(id).set(data);
  }
  getAttended(id) {
    this.attended = this.afd.collection(id).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          var data :any = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return {data};
        });
      })
    );
    return this.attended;
  }
  // Amount
  addAmount(id, data) {
    this.afd.collection('Amount/').doc(id).set(data);
  }
  getAmount() {
    this.users = this.afd.collection('Amount').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
    return this.users;
  }


  // Individual Events
  addEvent(id, e) {
    this.afd.collection(id).add(e);
  }
  updateEvent(event, id, p) {
    this.afd.collection(event).doc(id).update(p);
  }
  getEvent(id) {
    this.users = this.afd.collection(id).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
    return this.users;
  }
  // Events
  add(e) {
    this.afd.collection('Events/').add(e);
  }
  update(id, p) {
    this.afd.collection('Events/').doc(id).update(p);
  }
  delete(id) {
    const path = 'Events/';
    this.afd.collection(path).doc(id).delete();
  }
  getAll() {
    this.users = this.afd.collection('Events').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
    return this.users;
  }
  // Users
  adduser(u) {
    this.afd.collection('Users/').add(u);
  }
  removeuser(id) {
    this.afd.collection('Users/').doc(id).delete();
  }
  getallUsers() {
    this.users = this.afd.collection('Users').snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
    return this.users;
  }
}

