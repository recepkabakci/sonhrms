import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialStateUser = {
    employees: [],
    isLoading: false,
    isLoadMoreLoading: false,
    page: 0,
    employeeProfile:{
        identityNumber: 0,
        firstName: '',
        middleName: '',
        lastName: '',
        profilePhoto: '',
        birthDay: '',
        startDate: '',
        quitDate: '',
        emailAddress: '',
        phoneNumber:'',
        gender: '',
        state: ''
    }

}
/**
 * Yonetilebilir fetch islemleri icin kullanılabilir yapılan api isteginin
 * durumu kontrol edilerek loading, error vs konularını otomatize eder.
 * DIKKAT her thunk için benzersiz isim olamlıdır.
 */
export const fetchCreateEmployee = createAsyncThunk(
    'user/fetchCreateEmployee',
    async(user) => {
        await fetch('http://localhost:9091/v1/api/manager/createemployee',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'br;q=1.0, gzip;q=0.8, *;q=0.1',
            },
            body: JSON.stringify(user)
        }).catch((err)=>console.log('Person olustururken hata oldu....: ',err))
    }
)

export const fetchGetAllEmployee = createAsyncThunk (
    'user/fetchGetAllEmployee',
    async(currentPage,thunkAPI)=>{
        const result=
         await fetch(`http://localhost:9091/v1/api/manager/findAllSlice?currentPage=${currentPage}&pageSize=10&sortParameter=id&direction=asc`)
          .then(p=>p.json())        
          .catch(err=>console.log(err));
          return result;
      }
);

export const fetchGetEmployee = createAsyncThunk(
    'user/fetchGetEmployee',
    async(id,thunkAPI)=>{
        const result=
         await fetch(`http://localhost:9091/v1/api/manager/findById?id=${id}`)
          .then(p=>p.json())       
          .then(p => console.log(p)) 
          .catch(err=>console.log(err));
          return result;
      }
);









/**
 * Burasi Global olarak state yonetimini yapacak, bu nedenle burada  olan datalarin
 * ilk baslangic degerleri olabilir. Bu kısmı tanımlama ihtiyacida olabilir.
 */
const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    /**
     * Daha cok elle mudehale edeceginiz kodlamalar icin kullanılan methodlardir.
     */

    reducers: {
        setEmployees:(state,action) => {
        state.employees = {...state.employeeProfile,...action.payload}; 
    },
    nextPage:(state)=>{
        state.page = state.page++;
    },
    resetPage:(state)=>{
        state.page=0;
    },
    setIdentityNumber:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,identityNumber: action.payload}
    },
    setFirstName:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,firstName: action.payload}
    },
    setMiddleName:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,middleName: action.payload}
    },
    setLastName:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,lastName: action.payload}
    },
    setProfilePhoto:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,profilePhoto: action.payload}
    },
    setBirthDay:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,birthDay: action.payload}
    },
    setStartDate:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,startDate: action.payload}
    },
    setQuitDate:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,quitDate: action.payload}
    },
    setEmailAddress:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,emailAddress: action.payload}
    },
    setPhoneNumber:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,phoneNumber: action.payload}
    },
    setGender:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,gender: action.payload}
    },
    setState:(state,action) => {
        state.employeeProfile = {...state.employeeProfile,state: action.payload}
    }
    },
    
    extraReducers: (build) => {
        build.addCase(fetchCreateEmployee.pending, (state,action) => {
            state.isLoading = true;
        });
        build.addCase(fetchCreateEmployee.fulfilled, (state,action) => {
            state.isLoading = false;
        });
        build.addCase(fetchCreateEmployee.rejected, (state,action) => {
            state.isLoading = false;
        });
        build.addCase(fetchGetAllEmployee.pending, (state,action) => {
            state.isLoading = true;
        });
        build.addCase(fetchGetAllEmployee.fulfilled, (state,action) => {
            state.isLoading = false;
            state.employees = action.payload.content;
        });
        build.addCase(fetchGetAllEmployee.rejected, (state,action) => {
            state.isLoading = false;
        });
        build.addCase(fetchGetEmployee.pending, (state,action) => {
            state.isLoading = true;
        });
        build.addCase(fetchGetEmployee.fulfilled, (state,action) => {
            state.isLoading = false;
            state.employees = action.payload.content;
        });
        build.addCase(fetchGetEmployee.rejected, (state,action) => {
            state.isLoading = false;
        });
        
    }
})
export const {
    resetPage,
    setEmployees,
    nextPage,
    setIdentityNumber,
    setFirstName,
    setMiddleName,
    setLastName,
    setProfilePhoto,
    setBirthDay,
    setStartDate,
    setQuitDate,
    setEmailAddress,
    setPhoneNumber,
    setGender,
    setState,

} = userSlice.actions;

export default userSlice.reducer;