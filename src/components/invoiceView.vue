<template>
    <div style="height:70vh; width: 100%; margin-left: 8vw; margin-top: 5vh;">
        <div style="height: 90vh">
            <v-row style=" width:90vw;"><span style="text-align:center; font-weight:900 ;">Tax Invoice</span></v-row>
            <v-divider style=" width:90vw;"></v-divider>
            <table style="width:90vw; border: white">
                <tr style="font-weight:900">QUICKMECHANIC GLOBAL SOLUTIONS PRIVATE LIMITED</tr>
                <tr style="font-weight:500">MULTIPLEX AREA, OMAXE NRI CITY CENTRE, PARI CHOWK,</tr>
                <tr style="font-weight:500">GREATER NOIDA, UTTAR PRADESH - 201310</tr>
                <tr style="font-weight:500">GSTIN/UIN: 09AAACQ8090K1ZX</tr>
                <tr style="font-weight:500">STATE NAME: Uttar Pradesh</tr>
                <tr style="font-weight:500">STATE CODE: 09</tr>
                <tr style="font-weight:500">CIN: U50400UP2022PTC160390</tr>
                <tr style="font-weight:500">EMAIL: contactus@quickmechanic.co.in</tr>
            </table>
            <v-divider class="black" style="width:90vw;"></v-divider>
            <table style="width:90vw; border: white;">
                <tr>
                    <td style="text-align: left; border: white; font-weight:500">Buyer: (Bill To)</td>
                    <td style="font-weight:900; border: white; ">Invoice ID:</td>
                    <td style="text-align:right; border: white; font-weight:500"> {{ CurrentInvoice.id }}</td>
                </tr>
                <tr>
                    <td style="text-align: left; border: white; font-weight:900">{{ CurrentInvoice.customerName }}</td>
                    <td style="font-weight:900; border: white;">Order ID:</td>
                    <td style="text-align:right; border: white; font-weight:500"> {{ CurrentInvoice.orderId }}</td>
                </tr>
                <tr>
                    <td style="text-align: left; border: white; font-weight:500">State: {{CurrentInvoice.state}}</td>
                    <td style="font-weight:900; border: white;">Service ID:</td>
                    <td style="text-align:right; border: white; font-weight:500"> {{CurrentInvoice.serviceId}}</td>
                </tr>
                <tr>
                    <td style="text-align: left; border: white; font-weight:500">State Code: </td>
                    <td style="font-weight:900; border: white;">Invoice Date:</td>
                    <td  style="text-align:right; border: white; font-weight:500">{{ CurrentInvoice.when.date }}</td>
                </tr>
            </table>
            <table style="width:90vw; margin-top: 10px; margin-bottom: 0px;">
                <tr style="">
                    <th style="font-weight:900; background-color:#BDBDBD; width: 50vw">Particulars</th>
                    <th style="font-weight:900; background-color:#BDBDBD; width: 15vw; text-align: right;">HSN/SAC</th> 
                    <th style="font-weight:900; background-color:#BDBDBD; width: 15vw; text-align: right;">Amount</th>
                </tr>
                <tr v-for="(item, i) in itemsList" :key="i" >
                    <td style=" font-weight:500">{{ item.name}}</td>
                    <td style="text-align:right; font-weight:500">998714</td> 
                    <td style="text-align:right; font-weight:500">Rs.{{(item.price).toFixed(2)}}</td>
                </tr>
            </table>
            <table style="width:90vw; margin-bottom: 10px;">
                <tr>
                    <td style="text-align:left; width: 40vw; border-right: white;  font-weight:500">Amount Chargeable (in words) <br>
                        <span style="font-weight:900; font-size: 20px;">Two Hundred Only</span>
                    </td>
                    <td style="text-align:right; width: 40vw; border-left: white;">
                        <span style="font-weight:900; font-size: 20px; padding: 3px;">TOTAL AMOUNT Rs.{{CurrentInvoice.amount}}</span>
                    </td>
                </tr>
            </table>
            <table style="width:90vw;  margin-top: 10px;">
                <tr>
                    <th style="font-weight:900; background-color:#BDBDBD; width:20vw">HSN/SAC</th>
                    <th style="font-weight:900; background-color:#BDBDBD; width:20vw">GST Type</th> 
                    <th style="font-weight:900; background-color:#BDBDBD; width:10vw">Rate</th>
                    <th style="font-weight:900; background-color:#BDBDBD; width:25vw">Taxable Amount</th>
                    <th style="font-weight:900; background-color:#BDBDBD; width:15vw">Tax</th>
                </tr>
                <tr v-for="(item, i) in gstList" :key="i" >
                    <td style=" font-weight:500">998714</td>
                    <td style=" font-weight:500">{{item.type}}</td> 
                    <td style=" font-weight:500">{{item.rate}}%</td>
                    <td style=" font-weight:500">Rs.{{(CurrentInvoice.amountBeforeTax-CurrentInvoice.discountedPrice)}}</td>
                    <td style=" font-weight:500">Rs.{{((CurrentInvoice.amountBeforeTax-CurrentInvoice.discountedPrice)*(item.rate/100)).toFixed(2)}}</td>
                </tr>
            </table>
            <table style="width:90vw;  margin-bottom: 10px;">
                <tr>
                    <td style=" border-right: white; font-weight:500">Tax Amount (in words): <br>
                        <span style="font-weight:900; font-size: 20px; font-weight:500"> Thirty Only</span></td>
                    <td style="font-weight:900; font-size: 20px;  border-left: white; text-align: right;">TOTAL TAX   Rs.{{CurrentInvoice.tax.toFixed(2)}}</td>
                </tr>
                <tr >
                    <td style="border-bottom:white; font-weight:500">Company's PAN: <span style="font-weight:900; font-size: 20px;"> AAACQ8090K </span></td>
                    <td style="font-weight:900; border-bottom:white; font-size: 20px; text-align:center">QUICKMECHANIC GLOBAL <br> SOLUTIONS PRIVATE LIMITED</td>
                </tr>
                <tr style="height:3vh; padding-bottom: 0px;">
                    <td style="margin-top:0px; height: 3vh; text-align: left; border-top:white; font-weight:500">Declaration: 
                        We declare that this invoice shows the actual 
                        price of the services described and that all <br>
                        particulars are true and correct.</td>
                    <td style="height:3vh; text-align:center; border-top:white; font-weight:500">
                        <img src="../assets/signature.png" width="350rem" alt=""><br>
                        Authorised Signatory
                    </td>
                </tr>
            </table>
            <v-divider class="black" style=" width:90vw;"></v-divider>
            <v-row style=" width:90vw; text-align: center; font-weight:500"><span style="text-align:center">SUBJECT TO DELHI JURISDICTION</span></v-row>
            <v-row style=" width:90vw; text-align: center; font-weight:500"><span style="text-align:center">This is a Computer Generated Invoice</span>
            </v-row>
        </div>
    </div>
</template>

<script>
import {  db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";
export default{
    name: "invoiceView",
    data(){
        return{
            allInvoices : [],
            InvoiceData: {},
            CurrentInvoice : [],
            itemsList: [],
            gstList: [],
        };
    },
    methods:{
        async fetchData() {
            const colRef = collection(db, "pickups/" + "MpxxhWBAmRJdsKsUmsVK" + "/invoices");
            onSnapshot(colRef, (snapshot) => {
                let items = [];
                snapshot.forEach((item) => {
                items.push({ id: item.id, ...item.data() });
                });
                this.allInvoices = items;
                this.InvoiceData = this.allInvoices.filter(
                    (item) => item.id == "fstrqHTWxyYB3L8gp6aJ"
                );
                this.CurrentInvoice = this.InvoiceData[0];
                this.itemsList = this.CurrentInvoice.items;
                this.gstList = this.CurrentInvoice.gstList;
                console.log(this.itemsList);
            });
        },
    },
    created() {
        this.fetchData();
        //this.createRazorPayOrder();
    },
    

}
</script>

<style>
table {
  border-collapse: collapse;
}
table, td, th {
  border: 1px solid;
  padding: 5px;
}
</style>