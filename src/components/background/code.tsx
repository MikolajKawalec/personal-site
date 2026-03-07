import { useEffect, useState } from "react";
import { Highlight, themes, Language } from "prism-react-renderer";

export const sortingAlgorithmSampleCPP = `//
// Created by admin on 02.12.2024.
//

#include "SortingAlgorithms.h"
#include <string>
#include <iostream>

template<typename T>
void SortingAlgorithms::bubbleSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;
    for (int i = 0; i < arr.size(); ++i) {
        for (int j = 0; j < arr.size() - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

template<typename T>
void SortingAlgorithms::insertionSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;
    // printArray(arr);
    for (int i = 1; i < arr.size(); i++) {
        int j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            std::swap(arr[j - 1], arr[j]);
            j--;
        }
        // printArray(arr);
    }
}


template<typename T>
void SortingAlgorithms::selectionSort(std::vector<T> &arr) {
    // printArray(arr);
    if (arr.size() < 2) return;
    for (int i = 0; i < arr.size() - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < arr.size(); ++j) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        std::swap(arr[i], arr[min_idx]);
        /*printArray(arr);*/
    }
}

template<typename T>
void SortingAlgorithms::mergeSort(std::vector<T> &arr, int left, int right) {
    if (arr.size() < 2) return;

    //flip right to arr size if -1
    if (right == -1) right = arr.size() - 1;

    //this is basecase
    if (left >= right) return;

    int mid = left + (right - left) / 2;

    //divide
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    //conquer
    merge(arr, left, mid, right);

    // printArray(arr);
}

template<typename T>
void SortingAlgorithms::merge(std::vector<T> &org, int left, int mid, int right) {
    //counter for the left
    int i = left;
    //counter for the right
    int j = mid + 1;

    int k = 0;
    //make a temporary array
    std::vector<T> temp(right - left + 1);

    //both non empty
    while (i <= mid && j <= right) {
        if (org[i] < org[j]) {
            temp[k] = org[i];
            i++;
        } else {
            temp[k] = org[j];
            j++;
        }
        k++;
    }

    //copy the empty cases
    while (i <= mid) {
        temp[k] = org[i];
        i++;
        k++;
    }
    while (j <= right) {
        temp[k] = org[j];
        j++;
        k++;
    }

    // copy the merged into the orginial
    for (int l = 0; l < temp.size(); l++) {
        org[left + l] = temp[l];
    }
}

template<typename T>
void SortingAlgorithms::quickSort(std::vector<T> &arr, int left, int right) {
    if (arr.size() < 2) return;

    //flip right to arr size if -10
    if (right == -10) right = arr.size() - 1;

    //this is basecase
    if (left >= right) return;

    int pivotIdx = partition(arr, left, right);

    // you are not supposed to sort the pivot itself
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
}

template<typename T>
int SortingAlgorithms::partition(std::vector<T> &arr, int left, int right) {
    int comparison_count = 0; // Counter for actual comparisons
    int i = left + 1;
    int j = right;
    T pivot = arr[left]; // Pivot as the first element

    while (true) {
        
        while (i <= right) {
            if (arr[i] > pivot) {
                break;
            }
            ++i;
        }

        
        while (j >= left + 1) {
            if (arr[j] < pivot) {
                ++comparison_count;
                break;
            }
            --j;
        }

        // If the pointers cross, break the loop
        if (i >= j) {
            break;
        }

        // Swap elements at "i" and "j"
        std::swap(arr[i], arr[j]);
    }


    std::swap(arr[left], arr[j]);


    return j; // Return the pivot position
}

//precondition nonnegative INT's
template<typename T>
void SortingAlgorithms::countingSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;

    //step 1: find the maximum
    int max = getMaximum(arr);
    // int min = getMinimum(arr);
    // int range = max - min + 1;


    //initiallizing the count array
    std::vector<int> countArr(max + 1);

    //frequency
    for (int i = 0; i < arr.size(); ++i) {
        ++countArr[arr[i]];
    }

    //make indexes nice
    for (int i = 1; i < countArr.size(); ++i) {
        countArr[i] += countArr[i - 1];
    }

    //make temporary array
    std::vector<T> tempArr(arr.size());
    for (int i = tempArr.size() - 1; i >= 0; --i) {
        tempArr[countArr[arr[i]] - 1] = arr[i];
        --countArr[arr[i]];
    }

    // printArray(countArr);

    for (int i = 0; i < tempArr.size(); ++i) {
        arr[i] = tempArr[i];
    }
}

//precondition only for initgers, this is not a requirment of an algorithm but for simplicity sake
template<typename T>
void SortingAlgorithms::radixSort(std::vector<T> &arr) {
    if (arr.size() < 2) return;

    // 1. ge the maxium number

    int m = getMaximum(arr);
    // 2. countsort on every digit.
    for (int exp = 1; m / exp > 0; exp *= 10) {
        // I need to rewrite countSort for radix sort to be able to sort just by the digit
        countingSortforRadix(arr, exp);
        // printArray(arr);
    }
}

template<typename T>
void SortingAlgorithms::countingSortforRadix(std::vector<T> &arr, int exp) {
    if (arr.size() < 2) return;

    //step 1: find the maximum
    int max = getMaximum(arr);


    //initiallizing the count array
    std::vector<int> countArr(max + 1);

    //frequency
    for (int i = 0; i < arr.size(); ++i) {
        const int index = (arr[i] / exp) % 10;
        ++countArr[index];
    }

    //make indexes nice
    for (int i = 1; i < countArr.size(); ++i) {
        countArr[i] += countArr[i - 1];
    }

    //make temporary array
    std::vector<T> tempArr(arr.size());
    for (int i = tempArr.size() - 1; i >= 0; --i) {
        const int index = (arr[i] / exp) % 10;
        tempArr[countArr[index] - 1] = arr[i];
        --countArr[index];
    }

    // printArray(countArr);

    for (int i = 0; i < tempArr.size(); ++i) {
        arr[i] = tempArr[i];
    }
}

template<typename T>
T SortingAlgorithms::getMaximum(std::vector<T> &arr) {
    if (arr.empty()) {
        throw std::invalid_argument("Array is empty");
    }
    T max = arr[0];
    for (int i = 1; i < arr.size(); ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

template<typename T>
T SortingAlgorithms::getMinimum(std::vector<T> &arr) {
    if (arr.empty()) {
        throw std::invalid_argument("Array is empty");
    }
    T min = arr[0];
    for (int i = 1; i < arr.size(); ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}


//all types generations

template
void SortingAlgorithms::bubbleSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::bubbleSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::bubbleSort<double>(std::vector<double> &arr);

template
void SortingAlgorithms::bubbleSort<std::string>(std::vector<std::string> &arr);


template
void SortingAlgorithms::insertionSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::insertionSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::insertionSort<double>(std::vector<double> &arr);


template
void SortingAlgorithms::selectionSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::selectionSort<float>(std::vector<float> &arr);

template
void SortingAlgorithms::selectionSort<double>(std::vector<double> &arr);


template
void SortingAlgorithms::mergeSort<int>(std::vector<int> &arr, int left, int right);

template
void SortingAlgorithms::mergeSort<float>(std::vector<float> &arr, int left, int right);

template
void SortingAlgorithms::mergeSort<double>(std::vector<double> &arr, int left, int right);


template
void SortingAlgorithms::merge<int>(std::vector<int> &org, int left, int mid, int right);

template
void SortingAlgorithms::merge<float>(std::vector<float> &org, int left, int mid, int right);

template
void SortingAlgorithms::merge<double>(std::vector<double> &org, int left, int mid, int right);

template
void SortingAlgorithms::quickSort<int>(std::vector<int> &arr, int left, int right);

template
void SortingAlgorithms::quickSort<float>(std::vector<float> &arr, int left, int right);

template
void SortingAlgorithms::quickSort<double>(std::vector<double> &arr, int left, int right);

template
int SortingAlgorithms::partition<int>(std::vector<int> &arr, int left, int right);

template
int SortingAlgorithms::partition<float>(std::vector<float> &arr, int left, int right);

template
int SortingAlgorithms::partition<double>(std::vector<double> &arr, int left, int right);

template
void SortingAlgorithms::countingSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::radixSort<int>(std::vector<int> &arr);

template
void SortingAlgorithms::countingSortforRadix<int>(std::vector<int> &arr, int exp);

template
int SortingAlgorithms::getMaximum<int>(std::vector<int> &arr);

template
float SortingAlgorithms::getMaximum<float>(std::vector<float> &arr);

template
double SortingAlgorithms::getMaximum<double>(std::vector<double> &arr);

template
std::string SortingAlgorithms::getMaximum<std::string>(std::vector<std::string> &arr);

template
int SortingAlgorithms::getMinimum<int>(std::vector<int> &arr);

template
float SortingAlgorithms::getMinimum<float>(std::vector<float> &arr);

template
double SortingAlgorithms::getMinimum<double>(std::vector<double> &arr);

template
std::string SortingAlgorithms::getMinimum<std::string>(std::vector<std::string> &arr);


`;

export const googleTestSampleCPP = `#include "gtest/gtest.h"
#include "ExampleClass.h"
#include "SortingAlgorithms.h"


#include <iostream>
//region ExampleSuite

TEST(ExampleSuite, ExampleTest) {
    EXPECT_EQ(1, ExampleClass::doSomething());
}

//endregion

//region BubbleSortTest

TEST(BubbleSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(BubbleSortTest, SortsDoubles) {
    std::vector<double> vec = {5.5, 3.3, 8.8, 4.4, 2.2};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, (std::vector<double>{2.2, 3.3, 4.4, 5.5, 8.8}));
}

TEST(BubbleSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(BubbleSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(BubbleSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(BubbleSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

// there is no reason why I actaully want to sort strings, but I can do it
TEST(BubbleSortTest, SortsStrings) {
    std::vector<std::string> vec = {"b", "c", "a", "f", "e"};
    SortingAlgorithms::bubbleSort(vec);
    EXPECT_EQ(vec, (std::vector<std::string>{"a", "b", "c", "e", "f"}));;
}

//endregion


//region InsertionSortTest

TEST(InsertionSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(InsertionSortTest, SortsIntegersExamQuestion) {
    std::vector<int> vec = {5, 3, 1, 8, 7, 4, 2, 6};
    // std::cout << "len: " << vec.size() << std::endl;

    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8}));
}

TEST(InsertionSortTest, SortsDoubles) {
    std::vector<double> vec = {5.5, 3.3, 8.8, 4.4, 2.2};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, (std::vector<double>{2.2, 3.3, 4.4, 5.5, 8.8}));
}

TEST(InsertionSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(InsertionSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(InsertionSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(InsertionSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::insertionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

//endregion

//region SelectionSortTest

TEST(SelectionSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(SelectionSortTest, SortsIntegersExamQuestion) {
    std::vector<int> vec = {5, 3, 1, 8, 7, 4, 2, 6};
    // std::cout << "len: " << vec.size() << std::endl;

    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8}));
}


TEST(SelectionSortTest, SortsDoubles) {
    std::vector<double> vec = {5.5, 3.3, 8.8, 4.4, 2.2};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, (std::vector<double>{2.2, 3.3, 4.4, 5.5, 8.8}));
}

TEST(SelectionSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(SelectionSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(SelectionSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(SelectionSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::selectionSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

//endregion

//region MergeSortTest

TEST(MergeSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(MergeSortTest, SortsIntegersExamQuestion) {
    std::vector<int> vec = {5, 3, 1, 8, 7, 4, 2, 6};
    // std::cout << "len: " << vec.size() << std::endl;

    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8}));
}

TEST(MergeSortTest, SortsDoubles) {
    std::vector<double> vec = {5.5, 3.3, 8.8, 4.4, 2.2};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, (std::vector<double>{2.2, 3.3, 4.4, 5.5, 8.8}));
}

TEST(MergeSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(MergeSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(MergeSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(MergeSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::mergeSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}


//this is giant test case if want to make sure that ms are real
/*
TEST(MergeSortTest, SortsLargeVector) {
    // Create a large vector with 1,000,000 elements in reverse order
    std::vector<int> vec(1000000);
    for (int i = 0; i < 1000000; ++i) {
        vec[i] = 1000000 - i;
    }

    // Sort the vector using mergeSort
    SortingAlgorithms::mergeSort(vec);

    // Verify that the vector is sorted
    for (int i = 0; i < 999999; ++i) {
        EXPECT_LE(vec[i], vec[i + 1]);
    }
}
*/

//endregion

//region PartitionTest
TEST(PartitionTest, ParititonSortTest) {
    std::vector<int> vec = {7, 8, 6, 4, 2, 1, 3, 5};
    int index = SortingAlgorithms::partition(vec, 0, vec.size() - 1);
    SortingAlgorithms::printArray(vec);
    EXPECT_EQ(index, 6);
}

//endregion PartitionTest

//region QuickSortTest

TEST(QuickSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(QuickSortTest, SortsDoubles) {
    std::vector<double> vec = {5.5, 3.3, 8.8, 4.4, 2.2};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, (std::vector<double>{2.2, 3.3, 4.4, 5.5, 8.8}));
}

TEST(QuickSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(QuickSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(QuickSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(QuickSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::quickSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

//endregion

//region CountingSortTest

TEST(CountingSortTest, SortsIntegers) {
    std::vector<int> vec = {5, 3, 8, 4, 2};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{2, 3, 4, 5, 8}));
}

TEST(CountingSortTest, SortsIntegersExamQuestion_Test) {
    std::vector<int> vec = {1, 5, 2, 2, 6, 3, 4, 3, 5, 3, 3};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6}));
}

TEST(CountingSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(CountingSortTest, SortsSingleElement) {
    std::vector<int> vec = {1};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, std::vector<int>{1});
}

TEST(CountingSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

TEST(CountingSortTest, SortsReverseOrder) {
    std::vector<int> vec = {5, 4, 3, 2, 1};
    SortingAlgorithms::countingSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{1, 2, 3, 4, 5}));
}

//endregion

//region RadixSortTest

TEST(RadixSortTest, SortsIntegers) {
    std::vector<int> vec = {123, 456, 789, 234, 567};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{123, 234, 456, 567, 789}));
}

TEST(RadixSortTest, SortsIntegersExamQuestion_test) {
    std::vector<int> vec = {203, 103, 110, 210, 311, 213, 111, 211};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{103, 110, 111, 203, 210, 211, 213, 311}));
}

TEST(RadixSortTest, SortsIntegersWithDuplicates) {
    std::vector<int> vec = {123, 456, 123, 234, 456};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{123, 123, 234, 456, 456}));
}

TEST(RadixSortTest, SortsEmptyVector) {
    std::vector<int> vec = {};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, std::vector<int>{});
}

TEST(RadixSortTest, SortsSingleElement) {
    std::vector<int> vec = {123};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, std::vector<int>{123});
}

TEST(RadixSortTest, SortsAlreadySorted) {
    std::vector<int> vec = {123, 234, 345, 456, 567};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{123, 234, 345, 456, 567}));
}

TEST(RadixSortTest, SortsReverseOrder) {
    std::vector<int> vec = {567, 456, 345, 234, 123};
    SortingAlgorithms::radixSort(vec);
    EXPECT_EQ(vec, (std::vector<int>{123, 234, 345, 456, 567}));
}

//endregion`;

interface CodeBackgroundProps {
  code: string;
  language: Language;
  className?: string;
}

export default function CodeBackground({
  code,
  language,
  className,
}: CodeBackgroundProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });

    observer.observe(root, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const syntaxTheme = isDark ? themes.dracula : themes.github;

  return (
    <div
      className={`font-mono text-sm leading-relaxed select-none ${className}`}
      aria-hidden="true"
    >
      <Highlight theme={syntaxTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{ ...style, backgroundColor: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
