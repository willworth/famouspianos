import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Piano } from "./piano";

@Component({
  selector: "app-piano",
  templateUrl: "./piano.component.html",
  styleUrls: ["./piano.component.scss"]
})
export class PianoComponent implements OnInit {
  private readonly baseURL = "http://192.168.1.106:7777/api";
  pianos: Piano[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPianos();
  }

  getPianos() {
    this.http
      .get<Piano[]>(`${this.baseURL}/pianos`)
      .subscribe(piano => (this.pianos = this.pianos));
  }

  createPiano(
    name: string,
    year: number,
    make: string,
    owner: string,
    factoid: string
  ) {
    const payload = { name: string, year, make, owner, factoid };
    this.http
      .post<Piano>(`${this.baseURL}/piano`, payload)
      .subscribe(response => {
        this.pianos.push(response);
      });
  }
}
