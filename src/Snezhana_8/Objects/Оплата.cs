﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhana_8
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оплата.
    /// </summary>
    // *** Start programmer edit section *** (Оплата CustomAttributes)

    // *** End programmer edit section *** (Оплата CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОплатаE", new string[] {
            "Способ as \'Способ\'",
            "Дата as \'Дата\'",
            "Сумма as \'Сумма\'"})]
    public class Оплата : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Snezhana_8.Способ1 fСпособ;
        
        private System.DateTime fДата;
        
        private double fСумма;
        
        private IIS.Snezhana_8.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (Оплата CustomMembers)

        // *** End programmer edit section *** (Оплата CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Дата CustomAttributes)

        // *** End programmer edit section *** (Оплата.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Дата Get start)

                // *** End programmer edit section *** (Оплата.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Оплата.Дата Get end)

                // *** End programmer edit section *** (Оплата.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Дата Set start)

                // *** End programmer edit section *** (Оплата.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Оплата.Дата Set end)

                // *** End programmer edit section *** (Оплата.Дата Set end)
            }
        }
        
        /// <summary>
        /// Способ.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Способ CustomAttributes)

        // *** End programmer edit section *** (Оплата.Способ CustomAttributes)
        public virtual IIS.Snezhana_8.Способ1 Способ
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Способ Get start)

                // *** End programmer edit section *** (Оплата.Способ Get start)
                IIS.Snezhana_8.Способ1 result = this.fСпособ;
                // *** Start programmer edit section *** (Оплата.Способ Get end)

                // *** End programmer edit section *** (Оплата.Способ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Способ Set start)

                // *** End programmer edit section *** (Оплата.Способ Set start)
                this.fСпособ = value;
                // *** Start programmer edit section *** (Оплата.Способ Set end)

                // *** End programmer edit section *** (Оплата.Способ Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Сумма CustomAttributes)

        // *** End programmer edit section *** (Оплата.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Сумма Get start)

                // *** End programmer edit section *** (Оплата.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Оплата.Сумма Get end)

                // *** End programmer edit section *** (Оплата.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Сумма Set start)

                // *** End programmer edit section *** (Оплата.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Оплата.Сумма Set end)

                // *** End programmer edit section *** (Оплата.Сумма Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Snezhana_8.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Заказ CustomAttributes)

        // *** End programmer edit section *** (Оплата.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.Snezhana_8.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Заказ Get start)

                // *** End programmer edit section *** (Оплата.Заказ Get start)
                IIS.Snezhana_8.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (Оплата.Заказ Get end)

                // *** End programmer edit section *** (Оплата.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Заказ Set start)

                // *** End programmer edit section *** (Оплата.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (Оплата.Заказ Set end)

                // *** End programmer edit section *** (Оплата.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОплатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаE", typeof(IIS.Snezhana_8.Оплата));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Оплата.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfОплата CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfОплата CustomAttributes)
    public class DetailArrayOfОплата : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Snezhana_8.DetailArrayOfОплата members)

        // *** End programmer edit section *** (IIS.Snezhana_8.DetailArrayOfОплата members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Оплата by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Оплата.
        /// </summary>
        public DetailArrayOfОплата(IIS.Snezhana_8.Заказ fЗаказ) : 
                base(typeof(Оплата), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.Snezhana_8.Оплата this[int index]
        {
            get
            {
                return ((IIS.Snezhana_8.Оплата)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Snezhana_8.Оплата dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
