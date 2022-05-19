import{pageBGColor,headerColor,evenColor,toothpaste,tableBG,modalBGColor,modalFontColor}from"./MiscVariables.js";import{changeSound}from"./Sounds.js";const settingsButton=document.getElementById("settingsButton"),settingsPopup=document.getElementById("settingsPopup"),timeInputs=document.querySelectorAll("#customTimeGroup input"),darkModeSwitch=document.getElementById("darkModeSwitch"),autoStartSwitch=document.getElementById("autoStartSwitch"),muteSwitch=document.getElementById("muteSwitch"),workSoundSelector=document.getElementById("workSoundSelector"),breakSoundSelector=document.getElementById("breakSoundSelector"),root=document.querySelector(":root");settingsButton.addEventListener("click",(()=>{"block"===settingsPopup.style.display?settingsPopup.style.display="none":settingsPopup.style.display="block"}));for(let e=0;e<timeInputs.length;e+=1)timeInputs[e].addEventListener("keypress",(e=>{e.which>=48&&e.which<=57||13===e.which||e.preventDefault(),48===e.which&&""===e.target.value&&e.preventDefault()}));function updateDarkMode(){darkModeSwitch.checked?(root.style.setProperty(pageBGColor.name,pageBGColor.darkVal),root.style.setProperty(pageBGColor.shortName,pageBGColor.darkVal),root.style.setProperty(headerColor.name,headerColor.darkVal),root.style.setProperty(headerColor.shortName,headerColor.darkVal),root.style.setProperty(evenColor.name,evenColor.darkVal),root.style.setProperty(evenColor.shortName,evenColor.darkVal),root.style.setProperty(toothpaste.name,toothpaste.darkVal),root.style.setProperty(tableBG.name,tableBG.darkVal),root.style.setProperty(modalBGColor.name,modalBGColor.darkVal),root.style.setProperty(modalFontColor.name,modalFontColor.darkVal)):(root.style.setProperty(pageBGColor.name,pageBGColor.val),root.style.setProperty(pageBGColor.shortName,pageBGColor.val),root.style.setProperty(headerColor.name,headerColor.val),root.style.setProperty(headerColor.shortName,headerColor.val),root.style.setProperty(evenColor.name,evenColor.val),root.style.setProperty(evenColor.shortName,evenColor.val),root.style.setProperty(toothpaste.name,toothpaste.val),root.style.setProperty(tableBG.name,tableBG.val),root.style.setProperty(modalBGColor.name,modalBGColor.val),root.style.setProperty(modalFontColor.name,modalFontColor.val))}darkModeSwitch.addEventListener("change",(()=>{localStorage.setItem("darkModeSwitch",darkModeSwitch.checked),updateDarkMode()})),autoStartSwitch.addEventListener("change",(()=>{localStorage.setItem("autoStartSwitch",autoStartSwitch.checked)})),muteSwitch.addEventListener("change",(()=>{localStorage.setItem("muteSwitch",muteSwitch.checked)})),darkModeSwitch.checked=null!=localStorage.getItem("darkModeSwitch")&&"true"===localStorage.getItem("darkModeSwitch"),autoStartSwitch.checked=null==localStorage.getItem("autoStartSwitch")||"true"===localStorage.getItem("autoStartSwitch"),muteSwitch.checked=null!=localStorage.getItem("muteSwitch")&&"true"===localStorage.getItem("muteSwitch"),workSoundSelector.value=null==localStorage.getItem("workSoundSelector")?"horn":localStorage.getItem("workSoundSelector"),breakSoundSelector.value=null==localStorage.getItem("breakSoundSelector")?"celebration":localStorage.getItem("breakSoundSelector"),changeSound(workSoundSelector,!1),changeSound(breakSoundSelector,!1),updateDarkMode();
