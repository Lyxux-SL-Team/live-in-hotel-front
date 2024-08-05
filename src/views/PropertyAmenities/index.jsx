import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import * as Icons from "tabler-icons-react";
import './index.css'
import * as Icon from './Icons'
import * as Comp from './componants'
import { animate } from "framer-motion";

const PoliciesAndSettings = () => {

  const timeName = ["06.00 AM", "06.30 AM", "07.00 AM", "07.30 AM", "08.00 AM"];
  const ageList = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const [amenities, setAmenities] = useState({
    options: 'Standard',
    FontDesk: { isFontDesk: false, selectDay: "EveryDay", deskOpens: '', deskClose: '', startDay: '', endDay: '', isVirtualDesk: true },
    SelfCheckAvailable: { isSelfCheckAvailable: false, guestsAccessTheirUnit: "-Select-", IsMobileApp: '-Select-' },
    GuestsCheckIn: { isLateCheckAvailable: false, from: '', to: '', noCheckInEnd: false },
    GuestsCheckOut: { checkOutTime: '' },
    Internet: {
      isInternet: false,
      options: [
        {
          option: "Wi-Fi in guestrooms", isNeeded: false, data:
            { type: 'free', speed: 25, amount: 3, payType: 'month', restrictionsApply: false }
        },
        {
          option: "Wi-Fi in public areas", isNeeded: false, data:
          {
            type: 'free', restrictionsApply: false, timeLimit: false, deviceLimit: false, limitedTime: 3, LimitType: 'hours', speed: 25, deviceCount: 1,
          }
        },
        {
          option: "Wired internet in guestrooms", isNeeded: false, data:
            { type: 'free' }
        },
        {
          option: "Wired internet in public areas", isNeeded: false, data:
            { type: 'free' }
        },
        {
          option: "Dial-up internet in guestrooms", isNeeded: false, data:
            { type: 'free' }
        },
        {
          option: "Dial-up internet in public areas", isNeeded: false, data:
            { type: 'free' }
        }
      ]
    },
    Parking: {
      isParking: false,
      options: [
        {
          option: 'Self parking', isNeeded: false, data:
          {
            type: 'free', coveredParking: false, uncoveredParking: false, securedParking: false, InOutPrivileges: false, amount: 3, amountType: ''
          }
        },
        {
          option: 'Valet parking', isNeeded: false, data:
          {
            type: 'free', coveredParking: false, uncoveredParking: false, securedParking: false, InOutPrivileges: false, amount: 3, amountType: ''
          }
        },
        {
          option: 'Extended', isNeeded: false, data:
          {
            type: 'free', coveredParking: false, uncoveredParking: false, securedParking: false,
          }
        },
        {
          option: 'Offsite', isNeeded: false, data:
          {
            type: 'free', OffsiteParkingDistance: '', offsiteParkingDistanceType: '', parkingHours: false, reservationsRequired: false, streetParking: false, nearbyParkingAmunt: '', nearbyParkingAmuntType: '', discountedRates: false
          }
        },
        {
          option: 'Off-street parking', isNeeded: false, data:
          {
            garage: false, carport: false,
          }
        },
        {
          option: 'Motorcycle parking only', isNeeded: false
        },
        {
          option: 'RV/Bus or Truck', isNeeded: false, data:
          {
            type: 'free'
          }
        },
        {
          option: 'Parking (limited spaces)', isNeeded: false, data:
          {
            isRestrictedNumber: false, howMeny: 0
          }
        },
        {
          option: 'Parking height restrictions apply', isNeeded: false, data:
          {
            type: 'free'
          }
        },
        {
          option: 'Onsite parking available on request', isNeeded: false, data:
          {
            type: 'free'
          }
        },
        {
          option: 'Electric car charging station', isNeeded: false, data:
          {
            type: 'free'
          }
        }
      ]
    },
    OfferBreakfast: {
      isOfferBreakfast: false,
      type: 'free',
      isFree: [
        { excludesChildrenFree: false, }
      ],
      isSurcharge: [
        { payType: 'SpecificAmount', amount: '', childAmount: '', minPrice: '', maxPrice: '', }
      ],
      breakfastType: '',
      breakfastAvailability: 'Daily',
      isDaily: [
        {
          times: 'sameTime', //sameTime , weekendWeekday
          start1: '',
          end1: '',
          start2: '',
          end2: '',
        }
      ],
      isWeekdays: [
        { start: '', end: '' }
      ],
      isWeekends: [
        { start: '', end: '' }
      ],
    },
    PoolAccess: {
      isPoolAccess: false, options: [
        { option: "Outdoor pool (open all year)", isNeed: false, data: { howMany: '' } },
        { option: "Outdoor seasonal pool", isNeed: false, data: { type: 'dateRange', from: '', to: '', statrMonth: '', endMonth: '' } },
        { option: "Indoor pool", isNeed: false, data: { howMany: '' } },
        { option: "Children's pool", isNeed: false, data: { type: '24Hours' } },
        { option: "Pool hours", isNeed: false, data: {} },
        { option: "Access to nearby indoor pool", isNeed: false, data: {} },
        { option: "Access to nearby outdoor pool", isNeed: false, data: {} },
        { option: "Poolside bar", isNeed: false, data: { howMany: '' } },
        { option: "Swim-up bar", isNeed: false, data: { howMany: '' } },
        { option: "Water park", isNeed: false, data: { type: 'free' } },
        { option: "Waterslide", isNeed: false, data: {} },
        { option: "Lazy river", isNeed: false, data: {} },
        { option: "Steam room", isNeed: false, data: {} },
        { option: "Spa tub", isNeed: false, data: {} },
        { option: "Lifeguard on site", isNeed: false, data: {} },
        { option: "Sauna", isNeed: false, data: {} },
        { option: "Fence around pool", isNeed: false, data: {} },
        { option: "Pool gate", isNeed: false, data: {} },
        { option: "Pool umbrellas", isNeed: false, data: {} },
        { option: "Pool sun loungers", isNeed: false, data: {} },
        { option: "Pool cabanas", isNeed: false, data: { type: 'free' } }
      ],
    },
    DiningVenues: {
      isDiningVenues: false, restaurants: '', bars: '', coffeeShopOrCafe: '', options: [
        { option: 'Snack bar/deli', isNeed: false, data: {} },
        { option: 'Coffee/tea in common areas', isNeed: false, data: {} },
        {
          option: 'Free reception', isNeed: false, data:
            { type: 'Daily' }
        },
        {
          option: 'Gala dinners', isNeed: false, subopt1: {
            subOption: "Christmas Eve gala dinner fee", isNeed: 'false', type: 'roomRate', amount1: '', amount2: '', age1: '', age2: ''
          }, subopt2: {
            subOption: "Christmas Day gala dinner fee", isNeed: 'false', type: 'roomRate', amount1: '', amount2: '', age1: '', age2: ''
          }, subopt3: {
            subOption: "New Year's Eve gala dinner fee", isNeed: 'false', type: 'roomRate', amount1: '', amount2: '', age1: '', age2: ''
          }, subopt4: {
            subOption: "New Year's Day gala dinner fee", isNeed: 'false', type: 'roomRate', amount1: '', amount2: '', age1: '', age2: ''
          }, subopt5: {
            subOption: "Valentine's Day gala dinner fee", isNeed: 'false', type: 'roomRate', amount1: '', amount2: '', age1: '', age2: ''
          }, subopt6: {
            subOption: "Other dates", isNeed: 'false', date1: '', date2: '', date1Type: 'roomRate', date2Type: 'roomRate', date1Amount1: '', date1Amount2: '', date2Amount1: '', date2Amount2: '', date1Age1: '', date1Age2: '', date2Age1: '', date2Age2: ''
          },
        },
        {
          option: 'Hosted evening meal', isNeed: false, data: {
            reservationRequired: false, mealAmmount: '1', dayType: 'Daily', coustomDate: []
          }
        }
      ],
    },
    Spa: {
      isSpa: false, options: [
        {
          option: 'Spa or spa services', isNeed: false, serviceType: 'full', spaName: '', dayType: 'daily',
          subOptionFull1: { subOption: 'Mud bath in spa', isNeed: false, },
          subOptionFull2: { subOption: 'Sauna in spa', isNeed: false, },
          subOptionFull3: { subOption: 'Steam room in spa', isNeed: false, },
          subOptionFull4: { subOption: 'Spa tub in spa', isNeed: false, },
          subOptionFull5: { subOption: 'Hot springs/mineral springs in spa', isNeed: false, },
          subOptionFull6: { subOption: 'Adult supervision required', isNeed: false, },
          subOptionFull7: { subOption: 'Age restriction applies', isNeed: false, },

          subOptionOnsite1: { subOption: 'Massages', isNeed: false, },
          subOptionOnsite2: { subOption: 'Spa treatment room(s)', isNeed: false, },
          subOptionOnsite3: { subOption: 'Spa treatments', isNeed: false, },
          subOptionOnsite4: { subOption: 'Advance reservations for spa services', isNeed: false, },
        },
        {
          option: 'Massages', isNeed: false,
          subOption1: { subOption: 'Advanced reservations for massages', isNeed: false },
          subOption2: { subOption: 'Deep tissue massage', isNeed: false },
          subOption3: { subOption: 'Hot stone massage', isNeed: false },
          subOption4: { subOption: 'Prenatal massage', isNeed: false },
          subOption5: { subOption: 'Sports massage', isNeed: false },
          subOption6: { subOption: 'Swedish massage', isNeed: false },
          subOption7: { subOption: 'Thai massage', isNeed: false },
        },
        {
          option: 'Spa treatment room(s)', isNeed: false, numberOfRoom: '',
          subOption1: { subOption: 'Couples treatment rooms', isNeed: false },
          subOption2: { subOption: 'Outdoor treatment areas', isNeed: false }
        },
        {
          option: 'Spa treatments', isNeed: false,
          subOption1: { subOption: 'Aromatherapy treatments', isNeed: false },
          subOption2: { subOption: 'Ayurvedic treatments', isNeed: false },
          subOption3: { subOption: 'Body scrubs', isNeed: false },
          subOption4: { subOption: 'Body treatments', isNeed: false },
          subOption5: { subOption: 'Body wraps', isNeed: false },
          subOption6: { subOption: 'Facial treatments', isNeed: false },
          subOption7: { subOption: 'Hydrotherapy treatments', isNeed: false },
          subOption8: { subOption: 'Manicures and pedicures', isNeed: false },
          subOption9: { subOption: 'Thalassotherapy treatments', isNeed: false },
          subOption10: { subOption: 'Detoxification wrap', isNeed: false },
          subOption11: { subOption: 'Reflexology', isNeed: false },
          subOption12: { subOption: 'Turkish bath/Hammam', isNeed: false },
        },
        { option: 'Advance reservations for spa services', isNeed: false }
      ],
    },
    AllowPets: {
      isAllowPets: false, urchargePets: 'yes', amount: '1', type1: '', type2: '', options: [
        { option: 'Maximum fee per stay', isNeed: false, data: { MaxAmt: '1' } },
        { option: 'Pet fee may vary based on length of stay', isNeed: false, data: { surchargePets: '' } },
        {
          option: 'Restrictions', isNeed: false,
          subOption1: { subOption: 'Maximum weight limit per pet', isNeed: false, val1: '', val2: '' },
          subOption2: { subOption: 'Small pets only', isNeed: false, val: '' },
          subOption3: { subOption: 'Pets allowed in smoking rooms only', isNeed: false },
          subOption4: { subOption: 'Pets allowed in specific rooms only', isNeed: false },
          subOption5: { subOption: 'Pets cannot be left unattended', isNeed: false },
          subOption6: { subOption: 'Other pet restrictions apply', isNeed: false }
        },
        {
          option: 'Pet deposit', isNeed: false, data: {
            amount: '1', type: '',
          }
        },
        {
          option: 'Pet cleaning fee', isNeed: false, data: {
            amount: '1'
          }
        },
        { option: 'Food and water bowls', isNeed: false },
        { option: 'Litter box', isNeed: false },
        { option: 'Dog exercise area', isNeed: false },
        { option: 'Pet-sitting services', isNeed: false },
        { option: 'Pet grooming services', isNeed: false }
      ],
    },
    Accessibility: {
      isAccessibility: false,
      WheelchairAccessible: 'yes', isWheelchairAccessible: [
        { option: 'Front desk', isNeed: false, data: { inches: '', centimeters: '' } },
        { option: 'Concierge desk', isNeed: false, data: {} },
        { option: 'Fitness center', isNeed: false, data: {} },
        { option: 'Lounge', isNeed: false, data: {} },
        { option: 'Meeting spaces/business center', isNeed: false, data: {} },
        { option: 'On-site restaurant', isNeed: false, data: {} },
        { option: 'Parking', isNeed: false, data: { parkingSpots: 0 } },
        { option: 'Van parking', isNeed: false, data: {} },
        { option: 'Valet for wheelchair-equipped vehicle', isNeed: false, data: {} },
        { option: 'Path of travel', isNeed: false, data: {} },
        { option: 'Public washroom', isNeed: false, data: {} },
        { option: 'Wheelchair-accessible shuttle', isNeed: false, data: {} }
      ],
      thereElevators: 'yes', inches: 0, centimeters: 0, accessiblePathElevator: false,
      PropertyEntrance: '', PropertyEntranceOptions: [
        { option: 'Well-lit path/walkway', isNeed: false },
        { option: 'Stair-free path/walkway', isNeed: false },
        { option: 'Stairs required to reach entrance', isNeed: false, accessibleParkingSpots: 1 },
        { option: 'Ramp to front entrance', isNeed: false }
      ],
      allowserviceanimals: '', isallowserviceanimals: [{}],
      accessibilityFeatures: '', accessibilityFeaturesOption: [
        { option: "Assistive listening devices available", isNeed: false },
        { option: "Assistive listening devices in meeting rooms", isNeed: false },
        { option: "Braille or raised signage", isNeed: false },
        { option: "Handrails in hallways", isNeed: false, inches: 0, centimeters: 0 },
        { option: "Handrails in stairways", isNeed: false, inches: 0, centimeters: 0 },
        { option: "Hospital bed available", isNeed: false },
        { option: "Portable hoist available", isNeed: false },
        { option: "Pool hoist on site", isNeed: false },
        { option: "Pool ramp on site", isNeed: false },
        { option: "Sign language-capable staff", isNeed: false },
        { option: "Visual alarms in hallways", isNeed: false },
        { option: "Wheelchairs available on site", isNeed: false }
      ],

    },
    Smooking: {
      isSmooking: false, finesApply: false, options: [
        { option: "Luggage storage", isNeed: false },
        { option: "Lockers available", isNeed: false },
        { option: "Laundry facilities", isNeed: false, CoinOperated: false },
        { option: "Dry cleaning/laundry service", isNeed: false },
        { option: "Tours/ticket assistance", isNeed: false },
        { option: "Concierge services", isNeed: false },
        { option: "Newspapers in lobby", isNeed: false, type: 'free' },
        { option: "Safe-deposit box at front desk", isNeed: false },
        { option: "ATM/banking", isNeed: false },
        { option: "Computer station", isNeed: false },
        { option: "Fireplace in lobby", isNeed: false },
        { option: "Communal living room", isNeed: false },
        { option: "Free grocery shopping service", isNeed: false },
        { option: "Gift shops or newsstand", isNeed: false },
        { option: "Grocery/convenience store", isNeed: false },
        { option: "Hair salon", isNeed: false },
        { option: "Library", isNeed: false },
        { option: "Multilingual staff", isNeed: false },
        { option: "Porter/bellhop", isNeed: false },
        {
          option: "Reception facilities", isNeed: false,
          subOption1: { subOption: 'Shared microwave', isNeed: false },
          subOption2: { subOption: 'Shared refrigerator', isNeed: false },
          subOption3: { subOption: 'Shopping on site', isNeed: false },
        },
        { option: "Shared microwave", isNeed: false },
        { option: "Shared refrigerator", isNeed: false },
        { option: "Shopping on site", isNeed: false },
        { option: "Television in common areas", isNeed: false },
        { option: "Water dispenser", isNeed: false },
        { option: "Wedding services", isNeed: false },
        { option: "Vending machine", isNeed: false }
      ],
      smokeType: 'free',
    },
    DepositBox: {
      isDepositBox: false, options: [
        { option: "Local maps", isNeed: false },
        { option: "Guidebooks or recommendations", isNeed: false },
        { option: "Restaurant dining guide", isNeed: false },
        { option: "Chef", isNeed: false },
        { option: "Meal delivery service available", isNeed: false },
        { option: "In-room massage available", isNeed: false },
        { option: "Slippers", isNeed: false },
        { option: "Child-size slippers", isNeed: false },
        { option: "Turndown service", isNeed: false },
        { option: "Iron/ironing board", isNeed: false, data: { type: 'in' } },
        { option: "In-room laundry", isNeed: false, data: { type: '' } },
        { option: "Laundry detergent", isNeed: false },
        { option: "Blackout drapes/curtains", isNeed: false },
        { option: "Window screens", isNeed: false },
        { option: "Soundproofed rooms", isNeed: false },
        { option: "Noise-free rooms not guaranteed", isNeed: false },
        { option: "In-room safe", isNeed: false, data: { type: '' } },
        { option: "Mobile key entry", isNeed: false },
        { option: "Free newspaper", isNeed: false, data: { type: 'Daily' } },
        {
          option: "Phone", isNeed: false,
          subOption1: { subOption: 'Smartphone', isNeed: false },
          subOption2: { subOption: 'Electrical adapters/chargers', isNeed: false },
          subOption3: { subOption: 'Computer monitor', isNeed: false },
        },
        { option: "Smartphone", isNeed: false, data: { speed: '', dataUsage: '', PhoneCalls: false, callType: '' } },
        { option: "Electrical adapters/chargers", isNeed: false },
        { option: "Computer monitor", isNeed: false },
        { option: "Printer", isNeed: false }
      ],
    },
    Housekeeping: {
      isHousekeeping: false, housekeepingType: 'Daily', HousekeepingFeeCharged: false, housekeepingTimeType: 'OncePerStay', housekeepingAmount: 0, amountType: '', orEvery: '',
      WeeklyHousekeepingNoCharge: false, HousekeepingVaries: false, HousekeepingVariesUnitSize: false,
      options: [
        { option: 'Change of towels', isNeed: false, often: '' },
        { option: 'Change of bed sheets', isNeed: false, often: '' }
      ],
    },
    AdditionalAmenities: {
      isAdditionalAmenities: false,
      options: [
        { option: "Adventure sport", isNeeded: false },
        { option: "Beach", isNeeded: false },
        { option: "Business", isNeeded: false },
        { option: "Casino", isNeeded: false },
        { option: "Family", isNeeded: false },
        { option: "Golf", isNeeded: false },
        { option: "Hot springs", isNeeded: false },
        { option: "Romantic", isNeeded: false },
        { option: "Shopping", isNeeded: false },
        { option: "Ski", isNeeded: false },
        { option: "Spa", isNeeded: false },
        { option: "Winery", isNeeded: false },
        { option: "City", isNeeded: false },
        { option: "Natural", isNeeded: false }
      ],
      adventureSport: [
        { option: "Bicycles", isNeeded: false, locationType: 'Onsite', rentalType: 'Free' },
        { option: "Hiking/biking", isNeeded: false, locationType: 'Onsite' },
        { option: "Horse riding/rental", isNeeded: false, locationType: 'Onsite' },
        { option: "Mountain biking", isNeeded: false, locationType: 'Onsite' },
        { option: "Archery on site", isNeeded: false, },
        { option: "Cave exploring", isNeeded: false, locationType: 'Onsite' },
        { option: "Ecotours", isNeeded: false, locationType: 'Onsite' },
        { option: "Helicopter/airplane tours on site", isNeeded: false, },
        { option: "Hunting", isNeeded: false, locationType: 'Onsite' },
        { option: "Mountain climbing nearby", isNeeded: false, },
        { option: "Ropes course on site", isNeeded: false, },
        { option: "Rock climbing", isNeeded: false, locationType: 'Onsite' },
        { option: "Scooters or mopeds", isNeeded: false, locationType: 'Onsite' },
        { option: "Segways", isNeeded: false, locationType: 'Onsite' },
        { option: "Skydiving", isNeeded: false, locationType: 'Onsite' },
        { option: "Ziplining", isNeeded: false, locationType: 'Onsite' }
      ],
      beach: [
        { option: "Beach access", isNeeded: false },
        { option: "Beach shuttle", isNeeded: false },
        { option: "Beach cabanas", isNeeded: false },
        { option: "Beach sun loungers", isNeeded: false },
        { option: "Beach towels", isNeeded: false },
        { option: "Beach umbrellas", isNeeded: false },
        { option: "Beach volleyball on site", isNeeded: false },
        { option: "Beach yoga on site", isNeeded: false },
        { option: "Massages on beach", isNeeded: false }
      ],
      business: [
        { option: "Business Center", isNeeded: false },
        { option: "Meeting rooms", isNeeded: false },
        { option: "Number of meeting rooms", isNeeded: false },
        { option: "Coworking spaces", isNeeded: false },
        { option: "Conference facilities", isNeeded: false }
      ],
      casino: [
        { option: "Casino", isNeeded: false },
        { option: "Bingo", isNeeded: false },
        { option: "Pachinko", isNeeded: false },
      ],
      family: [
        { option: "In-room childcare (surcharge)", isNeeded: false },
        { option: "On-site babysitting", isNeeded: false },
        { option: "Supervised childcare", isNeeded: false },
        { option: "Children's club", isNeeded: false },
        { option: "Children's dinnerware", isNeeded: false },
        { option: "High chair", isNeeded: false },
        { option: "Stroller", isNeeded: false },
        { option: "Baby bath", isNeeded: false },
        { option: "Baby monitor", isNeeded: false },
        { option: "Changing table", isNeeded: false },
        { option: "Art supplies", isNeeded: false },
        { option: "Children's books", isNeeded: false },
        { option: "Children's games", isNeeded: false },
        { option: "Toys", isNeeded: false },
        { option: "Musical instruments", isNeeded: false },
        { option: "Trampoline", isNeeded: false },
        { option: "Shared playground onsite", isNeeded: false },
        { option: "Bed rails", isNeeded: false },
        { option: "Cabinet locks", isNeeded: false },
        { option: "Corner guards", isNeeded: false },
        { option: "Fireplace gate", isNeeded: false },
        { option: "Stair gate", isNeeded: false },
        { option: "Wall socket/outlet covers", isNeeded: false },
        { option: "Window guards", isNeeded: false }
      ],
      golf: [
        { option: "Golf course", isNeeded: false },
        { option: "Golf driving range on site", isNeeded: false },
      ],
      hotSprings: [
        { option: "Hot springs nearby", isNeeded: false },
        { option: "Hot springs on site", isNeeded: false },
      ],
      romantic: [
        { option: "Couples/private dining", isNeeded: false },
        { option: "Private picnics", isNeeded: false },
        { option: "Champagne service", isNeeded: false },
        { option: "Proposal/romance packages available", isNeeded: false }
      ],
      shopping: [
        { option: "Designer stores on site", isNeeded: false },
        { option: "Shopping mall on site", isNeeded: false },
        { option: "Art gallery on site", isNeeded: false }
      ],
      ski: [
        { option: "Ski-in/ski-out access", isNeeded: false },
        { option: "Skiing nearby", isNeeded: false },
        { option: "Snowboarding", isNeeded: false },
        { option: "Cross-country skiing", isNeeded: false },
        { option: "Optional ski privileges", isNeeded: false },
        { option: "Ski passes available", isNeeded: false },
        { option: "Ski storage", isNeeded: false },
        { option: "Ski lessons", isNeeded: false },
        { option: "Ski lift privileges", isNeeded: false },
        { option: "Ski equipment rental", isNeeded: false },
        { option: "Downhill skiing", isNeeded: false },
        { option: "Ski shuttle", isNeeded: false },
        { option: "Ski shuttle nearby", isNeeded: false }
      ],
      spa: [
        { option: "Ski shuttle nearby", isNeeded: false }
      ],
      winery: [
        { option: "Winery attached", isNeeded: false },
        { option: "Vineyard", isNeeded: false },
        { option: "Tasting room", isNeeded: false },
        { option: "Wine release events", isNeeded: false },
        { option: "Private winery tours", isNeeded: false },
        { option: "Public winery tours", isNeeded: false }
      ],
      city: [
        { option: "Property location", isNeeded: false },
        { option: "Connected to the property", isNeeded: false },
        { option: "Near the property", isNeeded: false }
      ],
      natural: [
        { option: "Property location", isNeeded: false },
        { option: "Connected to the property", isNeeded: false },
        { option: "Near the property", isNeeded: false }
      ],
    }
  });
  console.log(amenities)

  const updateAmenities = (name, value, type = 'single') => { // type = single ,  multi , layer3
    console.log(type);
    if (type == 'single') {
      setAmenities({
        ...amenities,
        [name]: value,
      });
    } else if (type == 'multi') {
      const names = name.split(".");
      setAmenities(prevState => ({
        ...prevState,
        [names[0]]: {
          ...prevState[names[0]],
          [names[1]]: value,
        }
      }));

    } else if (type == 'layer3') {
      const [data1, data2, index, data3] = name.split(".");
      setAmenities(prevState => {
        const newArray = [...prevState[data1][data2]];
        newArray[parseInt(index, 10)] = {
          ...newArray[parseInt(index, 10)],
          [data3]: value,
        };

        return {
          ...prevState,
          [data1]: {
            ...prevState[data1],
            [data2]: newArray,
          },
        };
      });

    } else if (type == 'layer4') {
      const [data1, data2, index, data3, data4] = name.split(".");

      setAmenities(prevState => {
        const newArray = [...prevState[data1][data2]];
        newArray[parseInt(index, 10)] = {
          ...newArray[parseInt(index, 10)],
          [data3]: {
            ...newArray[parseInt(index, 10)][data3], // Correctly spread the existing nested object
            [data4]: value
          },
        };

        console.log(newArray);

        return {
          ...prevState,
          [data1]: {
            ...prevState[data1],
            [data2]: newArray,
          },
        };
      });
    }

  };


  return (
    <section className="p-4">
      <form className="d-flex flex-column gap-3">
        {amenities.Internet.options[0].data.type}
        <p style={{ fontWeight: "600", fontSize: "20px", color: '#1A1A1A' }}>Property Amenities</p>
        <div className="border rounded">
          {/* select option */}
          <div className="border-bottom p-3 d-flex flex-column gap-3">
            <p
              onClick={(e) => updateAmenities(`Internet.options.0.data.type`, 'haha', 'layer4')}
              className="text-black"
              style={{ fontSize: "18px", fontWeight: 400 }}
            >
              Check-in / check-out
            </p>
            <div className="d-flex gap-2">
              <p
                className="fs-14 py-1 px-4 border rounded-pill"
                style={
                  amenities.options == 'Standard'
                    ? {
                      transition: "0.5s",
                      cursor: "pointer",
                      backgroundColor: "#000000",
                      color: "white",
                    }
                    : { cursor: "pointer" }
                }
                onClick={() => {
                  updateAmenities('options', 'Standard');
                }}
              >
                Standard options
              </p>{" "}
              <p
                className="py-1 px-4 border rounded-pill"
                style={
                  amenities.options == 'Advanced'
                    ? {
                      transition: "0.5s",
                      cursor: "pointer",
                      backgroundColor: "#000000",
                      color: "white",
                    }
                    : {
                      cursor: "pointer",
                    }
                }
                onClick={() => {
                  updateAmenities('options', 'Advanced');
                }}
              >
                Advanced options
              </p>
            </div>
            <div>
            </div>
          </div>

          {/* standed option  */}
          <div>

            {/* 1 */}
            <div className="border-bottom p-3 d-flex flex-column gap-1">
              <p className="text-black fs-18">Check-in options</p>

              <p className="fs-14">Is there a front desk at your property?</p>
              <Form.Group className="d-flex gap-2">
                <Form.Label className={amenities.FontDesk.isFontDesk ? "btn-active" : "btn-nonActive"} htmlFor="isFontDesk-yes">Yes</Form.Label>
                <Form.Check className="d-none" type="radio" name="isFontDesk" id="isFontDesk-yes" onClick={() => updateAmenities('FontDesk.isFontDesk', true, 'multi')} />
                <Form.Label className={!amenities.FontDesk.isFontDesk ? "btn-active" : "btn-nonActive"} htmlFor="isFontDesk-no">No</Form.Label>
                <Form.Check className="d-none" type="radio" name="isFontDesk" id="isFontDesk-no" onClick={() => updateAmenities('FontDesk.isFontDesk', false, 'multi')} />
              </Form.Group>
              {amenities.FontDesk.isFontDesk
                ? <Comp.IsFontDeskYes Data={amenities.FontDesk} UpdateData={updateAmenities} />
                : <Comp.IsFontDeskNo Data={amenities.FontDesk} UpdateData={updateAmenities} />
              }

              <p className="fs-14">Is late check-in available? </p>
              <Form.Group className="d-flex gap-2">
                <Form.Label className={amenities.SelfCheckAvailable.isSelfCheckAvailable ? "btn-active" : "btn-nonActive"} htmlFor="isSelfCheckAvailable-yes">Yes</Form.Label>
                <Form.Check className="d-none" type="radio" name="isSelfCheckAvailable" id="isSelfCheckAvailable-yes" onClick={() => updateAmenities('SelfCheckAvailable.isSelfCheckAvailable', true, 'multi')} />

                <Form.Label className={!amenities.SelfCheckAvailable.isSelfCheckAvailable ? "btn-active" : "btn-nonActive"} htmlFor="isSelfCheckAvailable-no">No</Form.Label>
                <Form.Check className="d-none" type="radio" name="isSelfCheckAvailable" id="isSelfCheckAvailable-no" onClick={() => updateAmenities('SelfCheckAvailable.isSelfCheckAvailable', false, 'multi')} />
              </Form.Group>
              {amenities.SelfCheckAvailable.isSelfCheckAvailable
                && <Comp.IsSelfCheckAvailable Data={amenities.SelfCheckAvailable} UpdateData={updateAmenities} />
              }
            </div>

            <div className="border-bottom p-3 d-flex flex-column gap-3">
              <p className="fs-18 text-black">When can guests check in?</p>
              <div className="d-flex gap-3">
                <Form.Group>
                  <Form.Label className="fs-14">From</Form.Label>
                  <Form.Select className="w-auto" style={{ outline: "none" }} onChange={(e) => updateAmenities('GuestsCheckIn.from', e.target.value, 'multi')}>
                    <option value=''>-select-</option>
                    {
                      timeName.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="fs-14">To</Form.Label>
                  <Form.Select className="w-auto" style={{ outline: "none" }} onChange={(e) => updateAmenities('GuestsCheckIn.to', e.target.value, 'multi')}>
                    <option value=''>-select-</option>
                    {
                      timeName.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))
                    }
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group className="d-flex gap-2">
                <Form.Check
                  onClick={() => updateAmenities('GuestsCheckIn.noCheckInEnd', !amenities.GuestsCheckIn.noCheckInEnd, 'multi')}
                  defaultChecked={amenities.GuestsCheckIn.noCheckInEnd}
                  type="radio"
                  id="NoCheckInEndTime"
                />
                <Form.Label className="fs-14 text-black" htmlFor="NoCheckInEndTime">No check-in end time</Form.Label>
              </Form.Group>

              <p className="fs-14">Is late check-in available? </p>
              <Form.Group className="d-flex gap-2">
                <Form.Label className={amenities.GuestsCheckIn.isLateCheckAvailable ? "btn-active" : "btn-nonActive"} htmlFor="isLateCheckAvailable-yes">Yes</Form.Label>
                <Form.Check className="d-none" type="radio" name="isLateCheckAvailable" id="isLateCheckAvailable-yes" onClick={() => updateAmenities('GuestsCheckIn.isLateCheckAvailable', true, 'multi')} />
                <Form.Label className={!amenities.GuestsCheckIn.isLateCheckAvailable ? "btn-active" : "btn-nonActive"} htmlFor="isLateCheckAvailable-no">No</Form.Label>
                <Form.Check className="d-none" type="radio" name="isLateCheckAvailable" id="isLateCheckAvailable-no" onClick={() => updateAmenities('GuestsCheckIn.isLateCheckAvailable', false, 'multi')} />
              </Form.Group>
              <div></div>
            </div>

            <div className="border-bottom p-3 d-flex flex-column gap-3">
              <p className="fs-18 text-black">When do guests need to check out?</p>
              <Form.Group>
                <Form.Label className="fs-14">Check-out time</Form.Label>
                <Form.Select className="w-auto" style={{ outline: "none" }} onChange={(e) => updateAmenities('GuestsCheckOut.checkOutTime', e.target.value, 'multi')}>
                  <option value=''>-select-</option>
                  {
                    timeName.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))
                  }
                </Form.Select>
              </Form.Group>
              <div></div>
            </div>

            <div className="border-bottom p-3 d-flex flex-column gap-3">
              <p className="fs-18 tetx-black">Age restrictions</p>
              <Form.Group>
                <Form.Label className="fs-14">Minimum check-in age</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle className="w-100" variant="white" style={{ textAlign: 'left' }}>
                    {amenities.GuestsCheckOut.checkOutTime == '' ? "-select-" : amenities.GuestsCheckOut.checkOutTime}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="overflow-auto" style={{ maxHeight: '200px' }}>
                    <Dropdown.Item className="fs-14">-select-</Dropdown.Item>
                    {
                      ageList.map((item, index) => (
                        <Dropdown.Item key={index} className="fs-14" onClick={() => updateAmenities('GuestsCheckOut.checkOutTime', item, 'multi')}>{item}</Dropdown.Item>
                      ))
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <div></div>
            </div>

          </div>
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.Wifi />Do you offer internet?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Internet.isInternet ? "btn-active" : "btn-nonActive"} htmlFor="isInternet-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isInternet" id="isInternet-yes" onClick={() => updateAmenities('Internet.isInternet', true, 'multi')} />
            <Form.Label className={!amenities.Internet.isInternet ? "btn-active" : "btn-nonActive"} htmlFor="isInternet-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isInternet" id="isInternet-no" onClick={() => updateAmenities('Internet.isInternet', false, 'multi')} />
          </Form.Group>
          {amenities.Internet.isInternet &&
            <Comp.IsInternet className='ms-3' Data={amenities.Internet} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.CarParking />Do you offer parking?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Parking.isParking ? "btn-active" : "btn-nonActive"} htmlFor="isParking-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isParking" id="isParking-yes" onClick={() => updateAmenities('Parking.isParking', true, 'multi')} />
            <Form.Label className={!amenities.Parking.isParking ? "btn-active" : "btn-nonActive"} htmlFor="isParking-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isParking" id="isParking-no" onClick={() => updateAmenities('Parking.isParking', false, 'multi')} />
          </Form.Group>
          {amenities.Parking.isParking &&
            <Comp.IsParking Data={amenities.Parking} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.CoffeeCup />Do you offer breakfast?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.OfferBreakfast.isOfferBreakfast ? "btn-active" : "btn-nonActive"} htmlFor="isOfferBreakfast-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isOfferBreakfast" id="isOfferBreakfast-yes" onClick={() => updateAmenities('OfferBreakfast.isOfferBreakfast', true, 'multi')} />
            <Form.Label className={!amenities.OfferBreakfast.isOfferBreakfast ? "btn-active" : "btn-nonActive"} htmlFor="isOfferBreakfast-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isOfferBreakfast" id="isOfferBreakfast-no" onClick={() => updateAmenities('OfferBreakfast.isOfferBreakfast', false, 'multi')} />
          </Form.Group>
          {amenities.OfferBreakfast.isOfferBreakfast &&
            <Comp.IsOfferBreakfast Data={amenities.OfferBreakfast} UpdateData={updateAmenities} />
          }
        </div>

        <p style={{ fontWeight: "600", fontSize: "20px", color: '#1A1A1A' }}>Popular facilities and services</p>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.SwimmingPool />Do your guests have pool access?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.PoolAccess.isPoolAccess ? "btn-active" : "btn-nonActive"} htmlFor="isPoolAccess-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isPoolAccess" id="isPoolAccess-yes" onClick={() => updateAmenities('PoolAccess.isPoolAccess', true, 'multi')} />
            <Form.Label className={!amenities.PoolAccess.isPoolAccess ? "btn-active" : "btn-nonActive"} htmlFor="isPoolAccess-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isPoolAccess" id="isPoolAccess-no" onClick={() => updateAmenities('PoolAccess.isPoolAccess', false, 'multi')} />
          </Form.Group>
          {amenities.PoolAccess.isPoolAccess &&
            <Comp.IsPoolAccess Data={amenities.PoolAccess} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.SpoonKnife />Do you offer dining venues?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.DiningVenues.isDiningVenues ? "btn-active" : "btn-nonActive"} htmlFor="isDiningVenues-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isDiningVenues" id="isDiningVenues-yes" onClick={() => updateAmenities('DiningVenues.isDiningVenues', true, 'multi')} />
            <Form.Label className={!amenities.DiningVenues.isDiningVenues ? "btn-active" : "btn-nonActive"} htmlFor="isDiningVenues-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isDiningVenues" id="isDiningVenues-no" onClick={() => updateAmenities('DiningVenues.isDiningVenues', false, 'multi')} />
          </Form.Group>
          {amenities.DiningVenues.isDiningVenues &&
            <Comp.IsDiningVenues Data={amenities.DiningVenues} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.Spa />Do you have a spa or spa services?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Spa.isSpa ? "btn-active" : "btn-nonActive"} htmlFor="isSpa-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isSpa" id="isSpa-yes" onClick={() => updateAmenities('Spa.isSpa', true, 'multi')} />
            <Form.Label className={!amenities.Spa.isSpa ? "btn-active" : "btn-nonActive"} htmlFor="isSpa-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isSpa" id="isSpa-no" onClick={() => updateAmenities('Spa.isSpa', false, 'multi')} />
          </Form.Group>
          {amenities.Spa.isSpa &&
            <Comp.IsSpa Data={amenities.Spa} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.AnimalPrint />Do you allow pets?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.AllowPets.isAllowPets ? "btn-active" : "btn-nonActive"} htmlFor="isAllowPets-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isAllowPets" id="isAllowPets-yes" onClick={() => updateAmenities('AllowPets.isAllowPets', true, 'multi')} />
            <Form.Label className={!amenities.AllowPets.isAllowPets ? "btn-active" : "btn-nonActive"} htmlFor="isAllowPets-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isAllowPets" id="isAllowPets-no" onClick={() => updateAmenities('AllowPets.isAllowPets', false, 'multi')} />
          </Form.Group>
          {amenities.AllowPets.isAllowPets &&
            <Comp.IsAllowPets Data={amenities.AllowPets} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.Wheelchair />Do you have accessibility features at your property?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Accessibility.isAccessibility ? "btn-active" : "btn-nonActive"} htmlFor="isAccessibility-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isAccessibility" id="isAccessibility-yes" onClick={() => updateAmenities('Accessibility.isAccessibility', true, 'multi')} />
            <Form.Label className={!amenities.Accessibility.isAccessibility ? "btn-active" : "btn-nonActive"} htmlFor="isAccessibility-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isAccessibility" id="isAccessibility-no" onClick={() => updateAmenities('Accessibility.isAccessibility', false, 'multi')} />
          </Form.Group>
          {amenities.Accessibility.isAccessibility &&
            <Comp.IsAccessibility Data={amenities.Accessibility} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.Smooking />Do you offer guest services such as, smoking areas, laundry, or concierge?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Smooking.isSmooking ? "btn-active" : "btn-nonActive"} htmlFor="isSmooking-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isSmooking" id="isSmooking-yes" onClick={() => updateAmenities('Smooking.isSmooking', true, 'multi')} />
            <Form.Label className={!amenities.Smooking.isSmooking ? "btn-active" : "btn-nonActive"} htmlFor="isSmooking-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isSmooking" id="isSmooking-no" onClick={() => updateAmenities('Smooking.isSmooking', false, 'multi')} />
          </Form.Group>
          {amenities.Smooking.isSmooking &&
            <>
              <p className="fs-14 text-black"><b>Smoking Preferences</b></p>
              <Form.Group className='d-flex gap-2 '>
                <Form.Check defaultChecked={amenities.Smooking.smokeType == 'free'} type='radio' name={`SmookingType`} id={`SmookingTypeFree`} onChange={(e) => updateAmenities('Smooking.smokeType', 'free', 'multi')} />
                <Form.Label htmlFor={`SmookingTypeFree`}>Smoke-free property</Form.Label>

                <Form.Check defaultChecked={amenities.Smooking.smokeType == 'Designated'} type='radio' name={`SmookingType`} id={`SmookingTypeDesignated`} onChange={(e) => updateAmenities('Smooking.smokeType', 'Designated', 'multi')} />
                <Form.Label htmlFor={`SmookingTypeDesignated`}>Designated smoking areas</Form.Label>
              </Form.Group>

              <Comp.IsSmooking Data={amenities.Smooking} UpdateData={updateAmenities} />
            </>
          }
        </div>

        <p style={{ fontWeight: "600", fontSize: "20px", color: '#1A1A1A' }}>Room conveniences</p>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.DepositBox />Do you offer in-room conveniences such as ironing boards or safes?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.DepositBox.isDepositBox ? "btn-active" : "btn-nonActive"} htmlFor="isDepositBox-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isDepositBox" id="isDepositBox-yes" onClick={() => updateAmenities('DepositBox.isDepositBox', true, 'multi')} />
            <Form.Label className={!amenities.DepositBox.isDepositBox ? "btn-active" : "btn-nonActive"} htmlFor="isDepositBox-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isDepositBox" id="isDepositBox-no" onClick={() => updateAmenities('DepositBox.isDepositBox', false, 'multi')} />
          </Form.Group>
          {amenities.DepositBox.isDepositBox &&
            <Comp.IsDepositBox Data={amenities.DepositBox.options} UpdateData={updateAmenities} />
          }
        </div>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18 d-flex gap-2"><Icon.Cleaningbroom />Do you provide housekeeping?</p>
          <Form.Group className="d-flex gap-2">
            <Form.Label className={amenities.Housekeeping.isHousekeeping ? "btn-active" : "btn-nonActive"} htmlFor="isHousekeeping-yes">Yes</Form.Label>
            <Form.Check className="d-none" type="radio" name="isHousekeeping" id="isHousekeeping-yes" onClick={() => updateAmenities('Housekeeping.isHousekeeping', true, 'multi')} />
            <Form.Label className={!amenities.Housekeeping.isHousekeeping ? "btn-active" : "btn-nonActive"} htmlFor="isHousekeeping-no">No</Form.Label>
            <Form.Check className="d-none" type="radio" name="isHousekeeping" id="isHousekeeping-no" onClick={() => updateAmenities('Housekeeping.isHousekeeping', false, 'multi')} />
          </Form.Group>
          {amenities.Housekeeping.isHousekeeping &&
            <Comp.IsHousekeeping Data={amenities.Housekeeping} UpdateData={updateAmenities} />
          }
        </div>

        <p style={{ fontWeight: "600", fontSize: "20px", color: '#1A1A1A' }}>Additional Amenities (optional)</p>

        <div className="border rounded p-3 d-flex flex-column gap-3">
          <p className="text-black fs-18">What amenities make your property unique?</p>
          <p className="fs-14">Add amenities to stand out to travelers looking for the property that fits them perfectly.</p>
          <p className="fs-14 "
            style={{ color: "#02BCBC" }}
            onClick={() => updateAmenities('AdditionalAmenities.isAdditionalAmenities', !amenities.AdditionalAmenities.isAdditionalAmenities, 'multi')}
          >Add amenities <span className={`rotateIco ${amenities.AdditionalAmenities.isAdditionalAmenities === true && 'rotated'}`}><Icon.Arrow /></span></p>
          {amenities.AdditionalAmenities.isAdditionalAmenities &&
            <Comp.AdditionalAmenities Data={amenities.AdditionalAmenities} UpdateData={updateAmenities} />
          }
        </div>

        <div className="pt-3 d-flex gap-3 justify-content-between">
          <p style={{ width: "max-content" }} className="btn-nonActive">Back</p>
          <p style={{ width: "max-content" }} className="btn-active">Next</p>
        </div>

      </form>
    </section>
  );
};

export default PoliciesAndSettings;
